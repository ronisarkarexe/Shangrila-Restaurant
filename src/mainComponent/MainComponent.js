import React from 'react';
import Blogs from '../components/home/blogs/Blogs';
import Navbar from '../components/home/Navbar/Navbar';
import OurDelicious from '../components/home/ourDelicious/OurDelicious';

const MainComponent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blogs></Blogs>
            <OurDelicious></OurDelicious>
        </div>
    );
};

export default MainComponent;