import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='d-flex justify-content-center'>

            <div className='lg-w-50 border-2 border rounded-2 mt-5 left-50'>
                <div className='text-center'>
                    <h2 className='text-text-black'>Please Register</h2>
                    <hr className='mx-5 fw-bold fs-3' />
                </div>
                <Form className='p-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>

                    <div>
                        <Button className='w-100 mt-4' variant="dark">Sign With Google</Button>
                        <Button className='w-100 mt-2' variant="dark">Sign With Github</Button>
                        <Link className='mt-2 bold'>Please Register!!!</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;