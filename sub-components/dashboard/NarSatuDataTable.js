'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DataTable from 'react-data-table-component';

const NarSatuDataTable = () => {
  const [listData, setListData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchListNarSatu = async () => {
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
            console.log(item);
            return {
              number: (index + 1).toString(),
              user_name: item.user_name,
              tanggal: item.created_at,
              id: item.id
            };
          });

          setListData(updatedData);
        } else {

        }

      } catch (error) {
        console.error(error);
      } finally {

      }
    }
    fetchListNarSatu();
  }, []);

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f1f5f9', // Your desired header background color
        color: '#58595b',              // Header text color
        fontSize: '16px',           // Header font size
        fontWeight: 'normal',
        BorderTop: '1px solid #58595b',        // Header font weight
        paddingLeft: '20px',        // Add padding to the left of header cells
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
        paddingLeft: '20px',        // Add padding to the left of body cells
        paddingRight: '20px',       // Add padding to the right of body cells
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
      name: "Nama inspeksi",
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
            <Card.Header className="bg-white  py-4">
              <h4 className="mb-0">WBI Crusher Limestone Nar 1</h4>
            </Card.Header>
            <DataTable
              columns={columns}
              data={listData}
              pagination
              highlightOnHover
              customStyles={customStyles}
            />
            <Card.Footer className="bg-white text-center">
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NarSatuDataTable;