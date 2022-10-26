import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import CourseCard from './CourseCard';

const Courses = () => {
    const allcourses = useLoaderData()

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg='9'>
                        <Row gap='3'>


                            {
                                allcourses.map(course => <CourseCard course={course} key={course._id}></CourseCard>)
                            }

                        </Row>
                    </Col>
                    <Col lg='3'>
                        <RightNav></RightNav>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default Courses;