import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';
const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const signGoogle = () => {
        return signInWithPopup(auth, googleprovider)
    }
    const signFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)

            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate('/blog')

            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='lg-w-50 border-2 border rounded-2 mt-5 left-50'>
                <div className='text-center'>
                    <h2 className='text-text-black'>Please Login</h2>
                    <hr className='mx-5 fw-bold fs-3' />
                </div>
                <Form className='p-4' onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>

                    <div>
                        <Button className='w-100 mt-4' variant="dark" onClick={signGoogle}>Sign With Google</Button>
                        <Button className='w-100 mt-2' variant="dark" onClick={signFacebook}>Sign With Facebook</Button>
                        <Link className='mt-2 bold' to='/register'>Please Register!!!</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;