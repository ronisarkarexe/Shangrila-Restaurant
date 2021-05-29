import React, { Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import iron from "../../../Image By Roni/irene-strong.png"
const Reviews = [
   {
      img: iron,
      title: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   },
   {
      img: iron,
      title: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   },
   {
      img: iron,
      title: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   },
   {
      img: iron,
      title: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   }
]

class Review extends Component {
   render() {
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1
     };

     return (
       <section className="review-color">
          <div className="container">
         <h2 className="text-center review-p mt-5 pt-5">Testimonials</h2>
         <Slider {...settings}>
            {
               Reviews.map(review => {
                  return(
                  <div className="container mb-5 text-center">
                     <img class="img-fluid mx-auto mb-5 mt-5 img-res-fluid" src={review.img} alt="" />
                     <p className="review-p">{review.description}</p>
                     <h5 className="mb-3 review-p">{review.title}</h5>
                   </div>
                   )
               })
            }
         </Slider>
       </div>
       </section>
     );
   }
 }

 export default Review;