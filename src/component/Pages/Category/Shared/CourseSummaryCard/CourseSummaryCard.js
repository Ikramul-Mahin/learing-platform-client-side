import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CourseSummaryCard = ({ courses }) => {
    const { category_id, name, img, course_text } = courses

    return (
        <div className='my-5 d-flex  justify-content-center'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {course_text.slice(0, 70) + '...'}
                    </Card.Text>
                    <Link to={`/courses/${category_id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>

                </Card.Body>
            </Card>

        </div >
    );
};

export default CourseSummaryCard;