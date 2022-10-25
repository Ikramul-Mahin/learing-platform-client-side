import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import RightNav from '../component/RightNav/RightNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;