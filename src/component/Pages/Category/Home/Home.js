import React from 'react';
import './Home.css'

import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import Downlode from '../Courses/Downlode';

const Home = () => {
    const allcourses = useLoaderData()
    return (
        <div className='text-center mt-5 container '>
            <Downlode></Downlode>
            <div className='grid'>
                {
                    allcourses.map(courses => <CourseSummaryCard key={courses._id} courses={courses}></CourseSummaryCard>)
                }
            </div>
        </div >
    );
};

export default Home;