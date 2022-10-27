import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
const EnroleCourse = () => {

    return (
        <div className='my-5'>
            <MDBContainer fluid className='bg-dark'>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol>

                        <MDBCard className='my-4'>

                            <MDBRow className='g-0'>

                                <MDBCol md='6' className="d-none d-md-block">
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
                                </MDBCol>

                                <MDBCol md='6'>

                                    <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                        <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>

                                        <MDBRow>

                                            <MDBCol md='6'>
                                                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                                            </MDBCol>

                                            <MDBCol md='6'>
                                                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                                            </MDBCol>

                                        </MDBRow>

                                        <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text' />

                                        <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                                            <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                                            <label>Male</label>
                                            <input label='Male' name='male' type="radio" className='mx-2' />

                                            <label>Female</label>
                                            <input label='Feale' className='mx-2' name='female' type="radio" />


                                        </div>



                                        <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text' />
                                        <MDBInput wrapperClass='mb-4' label='Course' size='lg' id='form5' type='text' />
                                        <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' />

                                        <div className="d-flex justify-content-end pt-3">
                                            <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                                            <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                                        </div>

                                    </MDBCardBody>

                                </MDBCol>
                            </MDBRow>

                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>


        </div>
    );
};

export default EnroleCourse;