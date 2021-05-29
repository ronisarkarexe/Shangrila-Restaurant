import React from 'react';
import Home from '../components/home/Home/Home';
import Reservations from '../components/home/Reservations/Reservations';
import Review from '../components/home/Review/Review';
import Header from '../Header/Header';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Reservations></Reservations>
            <Review></Review>
        </div>
    );
};

export default MainComponent;