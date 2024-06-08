'use client'

import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import useMounted from 'hooks/useMounted';
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';

const SignUp = () => {
  const hasMounted = useMounted();
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const store = await fetch(process.env.NEXT_PUBLIC_API_URL + 'register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          password: password,
          confirmpassword: confirmPassword,
        }),
      });

      const response = await store.json();
      if (response.status === true) {
        MySwal.fire({
          title: "Success",
          text: response.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          router.push('/authentication/sign-in');
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
        console.log(response.server_message);
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
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/" className='mb-3'><Image src="/images/Logo_Solusi_Bangun_Indonesia.svg.png" 
                className="mb-5" alt="" width={250} height={50}/></Link>
              <h3 className="mb-6 fw-bold">Sign Up</h3>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form onSubmit={handleSubmit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Budiono" required="" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}  
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="bidiono@gmail.com" required="" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  
                />
              </Form.Group>

              {/* Phonenumber */}
              <Form.Group className="mb-3" controlId="phonenumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" name="phonenumber" placeholder="62812XXXXX" required="" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}  
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="**************" required="" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}  
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmpassword" placeholder="**************" required="" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}   
                />
              </Form.Group>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit" disabled={loading}>{loading ? 'Loading...' : "Create Account"}</Button>
                </div>
                <div className="d-md-flex justify-content-center mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">Already member? Login </Link>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp