import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Intro = () => {
    return (
        <div className='display text center'>
            <h2 className='fs-1 text-white fw-bold'>Welcome To <br /> <span className='text-success'> Skill Developer</span>  Workshp.</h2>
            <Link to='/course'>
                <Button variant='light'>Get Started</Button>
            </Link>
        </div>
    );
};

export default Intro;