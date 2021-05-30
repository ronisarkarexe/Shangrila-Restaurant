import React from 'react';
import Blogs from '../components/home/blogs/Blogs';
import Navbar from '../components/home/Navbar/Navbar';
import OurDelicious from '../components/home/ourDelicious/OurDelicious';
import Shef from '../components/home/Shef/Shef';

const MainComponent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blogs></Blogs>
            <OurDelicious></OurDelicious>
            <Shef></Shef>
        </div>
    );
};

export default MainComponent;