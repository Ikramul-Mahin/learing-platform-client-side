import React from 'react';
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allcourses = useLoaderData()
    return (
        <div className='text-center mt-3 d-grid d-md-grid container grid  '>
            {/* <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col> */}
            {
                allcourses.map(courses => <CourseSummaryCard key={courses._id} courses={courses}></CourseSummaryCard>)
            }
            {/* </Col>
                </Row>
            </Container> */}
        </div >
    );
};

export default Home;