import React, { Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import iron from "../../../Image By Roni/irene-strong.png"
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
   return {
      review: state.reviewsDat
   }
}


 
 // `connect` returns a new function that accepts the component to wrap:
//  const connectToStore = connect(mapStateToProps)
//  // and that function returns the connected, wrapper component:
//  const ConnectedComponent = connectToStore(Component)
 
//  // We normally do both in one step, like this:
//  connect(mapStateToProps)(Component)



class Review extends Component {
   render() {
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1
     };
     console.log('from review', this.props);

     return (
       <section className="review-color">
          <div className="container">
         <h2 className="text-center review-p mt-5 pt-5">Testimonials</h2>
         <Slider {...settings}>
            {
               this.props.review.map(review => {
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

 export default connect(mapStateToProps) (Review);