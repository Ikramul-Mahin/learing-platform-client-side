import React from 'react';
import { Button } from 'react-bootstrap';

const Downlode = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='border-black mb-2'>
            <center>
                <h3>Click on below button to download Courses Info</h3>
                <Button variant='outline-dark' onClick={onButtonClick}>
                    Downlode PDF
                </Button>
            </center>
        </div>
    );
};

export default Downlode;