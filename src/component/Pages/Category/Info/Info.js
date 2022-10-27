import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Info = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='d-flex justify-content-center text-center mt-5'>

            <Card style={{ width: '30rem' }}>
                <h2>Your Personal Info.</h2>
                <hr />
                <Card.Img variant="top" style={{ height: '250px' }} src={user?.photoURL} />
                <Card.Body>
                    <Card.Title>{user?.displayName}</Card.Title>
                    <Card.Text>

                        <p>Email: {user?.email}</p>
                    </Card.Text>
                    <Link to='/'>
                        <Button variant="dark">Courses</Button>
                    </Link>


                </Card.Body>
            </Card>
        </div>
    );
};

export default Info;