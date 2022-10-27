import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const Register = () => {
    const { user, createUser, upadateUserProfile } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                toast.success('Successfully Registerd!!')
                handleUpdateUser(name, photoURL)
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        upadateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='d-flex justify-content-center'>

            <div className='w-50 border-2 border rounded-2 mt-5 left-50'>
                <div className='text-center'>
                    <h2 className='text-text-black'>Please Register</h2>
                    <hr className='mx-5 fw-bold fs-3' />
                </div>
                <Form className='p-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo-URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="PhotoUrl" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Button variant="dark" className='' type="submit">
                        Submit
                    </Button>

                    <div>

                        <Link className='mt-2 bold text-black fs-6 mt-1' to='/login'>Already have an Account!</Link>
                    </div>
                </Form>
            </div >
        </div >
    );
};

export default Register;