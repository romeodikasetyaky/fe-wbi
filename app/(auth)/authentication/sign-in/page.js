'use client'

import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import useMounted from 'hooks/useMounted';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SignIn = () => {
  const hasMounted = useMounted();
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (emailOrPhone.length < 3 || password.length < 3 ) {
      MySwal.fire({
        title: "Error",
        text: 'Please input your credentials',
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
      setLoading(false);
      return;
    }

    try {
      const store = await fetch(process.env.NEXT_PUBLIC_API_URL + 'login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          email_or_phone: emailOrPhone,
          password: password,
        }),
      });

      const response = await store.json();
      console.log(response);
      if (response.status === true) {
        Cookies.set('user_id', response.data.user_id);
        Cookies.set('user_role', response.data.role);
        Cookies.set('user_name', response.data.name);
        Cookies.set('user_emai;', response.data.email);

        MySwal.fire({
          title: "Success",
          text: response.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          router.push('/');
        });
      }

      if (response.status === false) {
        MySwal.fire({
          title: "Error",
          text: response.message,
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        <Card className="smooth-shadow-md">
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/" className='mb-3'><Image src="/images/Logo_Solusi_Bangun_Indonesia.svg.png" 
                className="mb-5 align-center" alt="" width={250} height={50}/></Link>
              <h3 className="mb-6 fw-bold">Log In</h3>
            </div>
            {hasMounted &&
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" required="" 
                    name="email"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="" required="" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className='mt-5'>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" disabled={loading}>{loading ? 'Loading...' : "Submit"}</Button>
                  </div>
                  <div className="d-md-flex justify-content-center mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link href="/authentication/sign-up" className="fs-5">Create An Account </Link>
                    </div>
                  </div>
                </div>
              </Form>}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn