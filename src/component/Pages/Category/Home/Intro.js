import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Intro = () => {
    return (
        <div className='display text center '>
            <div className='my-5' >
                <div className='ms-5 mt-5'>
                    <h2 className='fs-1 text-white fw-bold my-5'>Welcome To <br /> <span className='text-success'> Skill Developer</span>  Workshop.</h2>
                    <Link to='/course' className='mt-5
                    '>
                        <Button variant='light'>Get Started</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;