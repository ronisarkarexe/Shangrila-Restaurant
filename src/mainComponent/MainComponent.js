import React from 'react';

import Footer from '../components/home/Footer/Footer';
import Gallery from '../components/home/Gallery/Gallery';
import Blogs from '../components/home/blogs/Blogs';
import OurDelicious from '../components/home/ourDelicious/OurDelicious';
import Shef from '../components/home/Shef/Shef';

const MainComponent = () => {
    return (
        <div>
            <Gallery></Gallery>
            <Blogs></Blogs>
            <Footer></Footer>
            <OurDelicious></OurDelicious>
            <Shef></Shef>
        </div>
    );
};

export default MainComponent;