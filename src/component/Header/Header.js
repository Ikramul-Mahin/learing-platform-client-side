import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faGraduationCap} /> Skill | Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  ">

                            <Button className='' variant="outline-light"> <small>Light-Mode</small> </Button>


                        </Nav>
                        <Nav className='d-flex justify-content-around'>

                            <Link to='/courses' className='text-decoration-none text-white px-2 py-2'>Course</Link>
                            <Link to='/faq' className='text-decoration-none text-white px-2 py-2'>FAQ</Link>
                            <Link to='/blog' className='text-decoration-none text-white px-2 py-2'>Blog</Link>
                            <Link to='/login' className='text-decoration-none text-white px-2 py-2'>Login</Link>
                            <Link to='/register' className='text-decoration-none text-white px-2 py-2'>Register</Link>




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;