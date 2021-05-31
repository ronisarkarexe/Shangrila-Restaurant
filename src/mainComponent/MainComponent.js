import React from 'react';
import Home from '../components/home/Home/Home';
import Reservations from '../components/home/Reservations/Reservations';
import Review from '../components/home/Review/Review';
import Header from '../Header/Header';

import Footer from '../components/home/Footer/Footer';
import Gallery from '../components/home/Gallery/Gallery';
import Blogs from '../components/home/blogs/Blogs';
import OurDelicious from '../components/home/ourDelicious/OurDelicious';
import Shef from '../components/home/Shef/Shef';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Gallery></Gallery>
            <Blogs></Blogs>
           
            <OurDelicious></OurDelicious>
            <Shef></Shef>
            <Reservations></Reservations>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
}

export default MainComponent;