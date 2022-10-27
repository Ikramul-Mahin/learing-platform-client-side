import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Downlode from './Downlode';
const Courses = () => {
    const allcourses = useLoaderData()

    return (
        <div className=' mt-5' >
            <Downlode></Downlode>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" style={{ height: '300px' }} src={allcourses.img} />
                    <Card.Body>
                        <Card.Title>{allcourses.name}</Card.Title>
                        <Card.Text>
                            {allcourses.course_text}
                        </Card.Text>
                        <h3>Instractor: {allcourses.instractor}</h3>
                        <h5>Price:{allcourses.price}</h5>
                        <Link to='/enrole'>
                            <Button variant="dark">Enrole Course</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Courses;