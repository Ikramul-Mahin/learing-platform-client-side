import React from 'react';

import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>


                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <strong>Sign up for our Courses</strong>
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start='12'>
                                    <MDBInput contrast type='email' label='Enter Your Email address' className='mb-4' />
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>

                    <section className='mb-2'>
                        <p>
                            Is there is any problem please info us in the given location. We always keep secrect your information
                        </p>
                    </section>

                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <Link className=' mx-1 text-white' href='#'>
                        SkillDeveloper.com
                    </Link>
                </div>
            </MDBFooter>

        </div>
    );
};

export default Footer;