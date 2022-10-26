import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Category = () => {
    const allCourses = useLoaderData()
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={allCourses.img} />
                <Card.Body>
                    <Card.Title>{allCourses.name}</Card.Title>
                    <Card.Text>
                        {allCourses.course_text}
                    </Card.Text>
                    <h4>Instractor: {allCourses.instractor}</h4>





                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;