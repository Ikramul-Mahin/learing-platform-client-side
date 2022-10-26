import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import LeftSideNav from '../component/Pages/Category/Shared/LeftSideNav';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;