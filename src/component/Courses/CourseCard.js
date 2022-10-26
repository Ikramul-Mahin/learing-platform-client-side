import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';
import CourseCardDetails from './CourseCardDetails';
const CourseCard = ({ course }) => {

    const { name, img, _id } = course
    console.log(_id)


    return (
        <Card style={{ width: '18rem' }} className='m-4 sm-ms-4'>
            <Card.Img variant="top" style={{ height: "250px" }} src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="dark"> <Link to={`/detail/${_id}`}> View Details   </Link> </Button>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;