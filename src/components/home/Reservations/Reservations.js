import React from 'react';
import magic from "../../../Image By Roni/Capture.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Reservations = () => {
   return (
      <section className="container color-change">
         <h1 className="mt-5 font-change pt-5 text-center">Reservations</h1>
         <div className="text-center mt-4">
            <img  src={magic} alt="" />
         </div>
         <div className="text-center  d-flex-res mt-5">
         <i class="fas fa-calendar-day fa-2x"></i>  <input className="me-4 ms-2 input-size" type="date" name="time" id="" /> <br />
         <i class="fas fa-clock fa-2x"></i> <input className="me-4 ms-2 input-size" type="time" name="" id="" placeholder="Time" /> <br />
         <i class="fas fa-users fa-2x"></i> <input className=" ms-2 input-size"type="number" name="" id="" placeholder="Guest" />
         </div>
         <button class="button-class mt-5 mx-auto d-flex justify-content-center mb-5">Find A Table</button>
      </section>
   );
};

export default Reservations;