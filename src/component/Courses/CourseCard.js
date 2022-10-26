import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CourseCard = ({ course }) => {



    console.log(course.name)
    return (
        <Card style={{ width: '18rem' }} className='m-4 sm-ms-4'>
            <Card.Img variant="top" style={{ height: "250px" }} src={course.img} />
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="dark">View Details</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;