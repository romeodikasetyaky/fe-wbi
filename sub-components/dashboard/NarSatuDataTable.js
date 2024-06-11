'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DataTable from 'react-data-table-component';

const NarSatuDataTable = () => {
  const router = useRouter();
  const [listData, setListData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListNarSatu = async () => {
      setLoading(true);
      try {
        const list = await fetch(process.env.NEXT_PUBLIC_API_URL + 'area-nar1', {
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
    fetchListNarSatu();
  }, []);

  const searchNarSatu = (e) => {
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
        backgroundColor: '#f1f5f9', 
        color: '#58595b',             
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
      name: "No",
      selector: (row) => row.number,
      sortable: true,
      width: '150px',
    },
    {
      name: "Tanggal",
      selector: (row) => row.tanggal,
      sortable: true,
      width: '250px',
    },
    {
      name: "Nama Inspektor",
      selector: (row) => row.user_name,
      sortable: true,
    },
    {
      name: "Details",
      selector: (row) => <Button onClick={() => handleButtonClick(row.id)}>View</Button>,
      sortable: false,
      button: true,
      width: '340px',
    },
  ]

  const handleButtonClick = (nar1Id) => {
    router.push(`/details/nar1/${nar1Id}`);
  };

  return (
    <>
      <Row className="mt-6">
        <Col md={12} xs={12}>
          <Card>
            <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Crusher Limestone Nar 1</h4>
              <Form className="d-flex align-items-center">
                <Form.Control type="text" placeholder="Search" className="ml-3" 
                  value={searchQuery}
                  onChange={searchNarSatu}
                />
              </Form>
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

export default NarSatuDataTable;