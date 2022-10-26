import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    {/* <Col lg='9'>
                        <Row gap='3'>


                            {
                                courses.map(course => <CourseCard course={course}></CourseCard>)
                            }

                        </Row>
                    </Col> */}
                    <Col lg='3'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default Courses;