'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DataTable from 'react-data-table-component';

const NarSatuADataTable = () => {
  const router = useRouter();
  const [listData, setListData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListNarSatuA = async () => {
      setLoading(true);
      try {
        const list = await fetch(process.env.NEXT_PUBLIC_API_URL + 'area-nar1a', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        });

        const response = await list.json();
        if (response.status) {
          const updatedData = response.data.map((item, index) => {
            return {
              number: (index + 1).toString(),
              user_name: item.user_name,
              tanggal: item.created_at,
              id: item.id.toString()
            };
          });

          setListData(updatedData);
          setFilteredData(updatedData);
        } else {
          console.log(404);
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Fetch completed");
        setLoading(false);
      }
    };
    fetchListNarSatuA();
  }, []);

  const searchNarSatuA = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchQuery(text);
    const filtered = text === "" ? listData : listData.filter(
      (item) =>
        item.user_name.toLowerCase().includes(text) ||
        item.tanggal.toLowerCase().includes(text) ||
        item.id.includes(text)
    );
    setFilteredData(filtered);
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#58595b', 
        color: '#f1f1f1',             
        fontSize: '16px',           
        fontWeight: 'normal',
        BorderTop: '1px solid #58595b',        
        paddingLeft: '20px',       
        paddingRight: '20px',
      },
    },
    rows: {
      style: {
        color: '#161c24',
        fontSize: '16px',
        fontWeight: '400',
      }
    },
    cells: {
      style: {
        paddingLeft: '20px',        
        paddingRight: '20px',       
      },
    },
  };

  const columns = [
    {
      name: <b>No</b>,
      selector: (row) => row.number,
      sortable: true,
      width: '75px',
    },
    {
      name: <b>Tanggal</b>,
      selector: (row) => row.tanggal,
      sortable: true,
      width: '150px',
    },
    {
      name: <b>Nama Inspektor</b>,
      selector: (row) => row.user_name,
      sortable: true,
      width: '200px',
    },
    {
      name: <b>Details</b>,
      selector: (row) => <Button onClick={() => handleButtonClick(row.id)}>View</Button>,
      sortable: false,
      button: true,
      width: '150px',
    },
  ]

  const handleButtonClick = (nar1aId) => {
    router.push(`/details/nar1a/${nar1aId}`);
  };

  return (
    <>
      <Row className="mt-6">
        <Col md={12} xs={12}>
          <Card style={{ width: '36rem' }}>
            <Card.Header>
              <div className="py-1 d-flex justify-content-between align-items-center"> 
              <h3 className="mb-0"><b>Crusher Limestone NAR 1</b></h3>
              <Form className="d-flex align-items-center">
                <Form.Control type="text" placeholder="Search" className="ml-3" 
                  value={searchQuery}
                  onChange={searchNarSatuA}
                />
              </Form>
              </div>
              <table width= '60%' font-size= '20px'>
                <tbody>    
                    <tr>
                        <td className="mb-0">&#10625; 213-BC3</td>
                        <td className="mb-0">&#10625; 213-BC5</td>
                        <td className="mb-0"></td>
                    </tr>
                    <tr>
                        <td className="mb-0">&#10625; 213-BC4</td>
                        <td className="mb-0">&#10625; 213-ST1</td>
                        <td className="mb-0"></td>
                    </tr>
                    </tbody>  
                </table>
            </Card.Header>
            {loading ? (
              <div className='d-flex justify-content-center mt-3'>
                <p>Loading...</p>
              </div>
            ) : filteredData.length > 0 ? (
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                customStyles={customStyles}
              />
            ) : (
              <div className='d-flex justify-content-center mt-3'>
                <p>Loading...</p>
              </div>
            )}
            <Card.Footer className="bg-white text-center">
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NarSatuADataTable;