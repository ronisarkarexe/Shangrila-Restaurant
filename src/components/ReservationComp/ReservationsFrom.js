import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const ReservationsFrom = () => {


  function emailSubmit(){
   console.log("Done")
}

   return (
      <section className="reserv-section">
         <div className="container">
            <h1 className="text-center reservation-text pt-4 mt-5">Reservation</h1>
            <p className="text-secondary reservation-text mt-4 text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, toed ut perspiciatis under.</p>
            <div className="pb-5">
            <h5 className="ms-2 font-family ">just write us text here_</h5>
                     <form className="contact-form" onSubmit={emailSubmit}>
                        <div className="row pt-3 mx-auto">
                           <div className="form-group mx-auto">
                                 <input type="text" className="form-control" name="name" placeholder="Fast Name"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input type="text" className="form-control" name="name" placeholder="Last Name"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input type="text" className="form-control" name="name" placeholder="Phone"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input type="email" className="form-control" name="email" placeholder="Email"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input type="text" className="form-control" name="subject" placeholder="Number of People"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <textarea type="text" className="form-control" id="" name="message" placeholder="Your Massage"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input className="button-class " type="submit" value="send message"/>
                           </div>
                        </div>
                        <Link to="/"><h6 className="ms-2"> Back To Home </h6></Link>
                        
                     </form>
            </div>
         </div>
      </section>
   );
};

export default ReservationsFrom;