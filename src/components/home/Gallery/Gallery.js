import React from 'react';
import './Gallery.css';
import galleryOne from '../../../images/1.jpg';
import galleryTwo from '../../../images/2.jpg';
import galleryThree from '../../../images/3.jpg';
import galleryFour from '../../../images/4.jpg';
import galleryFive from '../../../images/5.jpg';
import gallerySix from '../../../images/6.jpg';

const Gallery = () => {
    return (
    <section className="gallery pt-5 pb-5">
        <h1 className="galleryTitle">Food Gallery</h1>
        <div className="container">
            <div className="row mt-5">

                <div className="col-md-4 col-sm-4">
                    <div className="galleryContent text-center">
                        <img src={ galleryOne} alt="" />
                        <h4>Spicy Chicken</h4>
                        <p>Best Weekend Dinner Plan</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="galleryContent text-center">
                        <img src={ galleryTwo} alt="" />
                        <h4>Spicy Chicken</h4>
                        <p>Best Weekend Dinner Plan</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="galleryContent text-center">
                        <img src={ galleryThree} alt="" />
                        <h4>Spicy Chicken</h4>
                        <p>Best Weekend Dinner Plan</p>
                    </div>
                </div>
            </div> 

            <div className="row">

                <div className="col-md-4 col-sm-4">
                    <div className="galleryContent text-center">
                        <img src={ galleryFour} alt="" />
                        <h4>Spicy Chicken</h4>
                        <p>Best Weekend Dinner Plan</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="galleryContent text-center">
                        <img src={ galleryFive} alt="" />
                        <h4>Spicy Chicken</h4>
                        <p>Best Weekend Dinner Plan</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="galleryContent text-center">
                        <img src={ gallerySix} alt="" />
                        <h4>Spicy Chicken</h4>
                        <p>Best Weekend Dinner Plan</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Gallery;