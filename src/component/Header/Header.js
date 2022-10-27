import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { faGraduationCap, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { FaUniversity, FaUser, FaUsers } from "react-icons/fa";


import { Image } from 'react-bootstrap';
import LeftSideNav from '../Pages/Category/Shared/LeftSideNav';

const Header = () => {
    const [mode, setMode] = useState('dark');

    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container className='py-2'>
                    <Link to='/' className='text-decoration-none'>
                        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faGraduationCap} />  Skill | Developer</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  ">

                            <DarkModeToggle
                                mode={mode}
                                // dark="Dark"
                                light="Light Mode"
                                size="sm"
                                className='bg-black'
                                inactiveTrackColor="#e2e8f0"
                                inactiveTrackColorOnHover="#f8fafc"
                                inactiveTrackColorOnActive="#cbd5e1"
                                activeTrackColor="#334155"
                                activeTrackColorOnHover="#1e293b"
                                activeTrackColorOnActive="#0f172a"
                                inactiveThumbColor="#1e293b"
                                activeThumbColor="#e2e8f0"
                                onChange={(mode) => {
                                    setMode(mode);
                                }}
                            />



                        </Nav>
                        <Nav className='d-flex justify-content-around'>

                            {
                                user?.uid ?
                                    <>
                                        <Button className='' variant="outline-light" onClick={handleSignOut}> <small>Sign Out <FaUsers></FaUsers></small> </Button>
                                        {
                                            user?.photoURL ? <Image className='mx-1' style={{ height: '50px', width: "50px" }} title={user.displayName} src={user.photoURL} roundedCircle></Image>
                                                :
                                                <p><FaUsers></FaUsers> </p>

                                        }


                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='text-decoration-none text-white px-2 py-2'>Login</Link>
                                        <Link to='/register' className='text-decoration-none text-white px-2 py-2'>Register</Link>
                                    </>

                            }

                            <Link to='/course' className='text-decoration-none text-white px-2 py-2'>Course</Link>
                            <Link to='/faq' className='text-decoration-none text-white px-2 py-2'>FAQ</Link>
                            <Link to='/blog' className='text-decoration-none text-white px-2 py-2'>Blog</Link>
                            <Link to='/info' className='text-decoration-none text-white px-2 py-2'>Student Info</Link>







                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;