import React from 'react';
import Home from '../components/home/Home/Home';
import Reservations from '../components/home/Reservations/Reservations';
import Review from '../components/home/Review/Review';
import Header from '../Header/Header';
import Blogs from '../components/home/blogs/Blogs';
import OurDelicious from '../components/home/ourDelicious/OurDelicious';
import Shef from '../components/home/Shef/Shef';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <OurDelicious></OurDelicious>
            <Shef></Shef>
            <Reservations></Reservations>
            <Review></Review>
        </div>
    );
}

export default MainComponent;