import React from 'react';
import Blogs from '../components/home/Blogs/Blogs';
import Footer from '../components/home/Footer/Footer';
import Gallery from '../components/home/Gallery/Gallery';

const MainComponent = () => {
    return (
        <div>
            <Gallery></Gallery>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;