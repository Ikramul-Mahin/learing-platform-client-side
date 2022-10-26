import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)


    return (
        <div className='d-flex justify-content-center mt-5' >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '250px' }} src='' />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>

                    </Card.Text>

                    <Button variant="primary">View Details</Button>


                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;