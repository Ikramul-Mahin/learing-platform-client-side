import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5 text-center'>
            <h4>Course Categories</h4>
            {
                categories.map(category => <p className='border border-black bg-black rounded border-4 text-white py-2' category={category.id}>

                    <Link className='text-decoration-none text-white text-bold' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;