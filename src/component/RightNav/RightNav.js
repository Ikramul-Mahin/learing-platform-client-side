import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='bg-dark rounded text-center py-4 mt-5 mb-5' >
            <h4 className='text-white mt-2 text-md '>Course Categories</h4>
            {
                categories.map(category => <Button className='w-75 my-2 mx-3' variant="outline-light"><Link className='text-decoration-none'>{category.name}</Link> </Button>)
            }
        </div >
    );
};

export default RightNav;