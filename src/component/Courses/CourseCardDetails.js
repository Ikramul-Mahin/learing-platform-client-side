import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CourseCardDetails = () => {


    return (
        <div>
            <p>This is details.</p>
            <Card style={{ width: '18rem' }} className='m-4 sm-ms-4'>
                <Card.Img variant="top" style={{ height: "250px" }} src='' />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="dark"> <Link> View Details</Link> </Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCardDetails;