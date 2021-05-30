import React from 'react';
import Blogs from '../components/home/blogs/Blogs';
import Navbar from '../components/home/Navbar/Navbar';

const MainComponent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blogs></Blogs>
        </div>
    );
};

export default MainComponent;