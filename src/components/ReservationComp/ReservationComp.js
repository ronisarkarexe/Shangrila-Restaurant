import React from 'react';
import Reservations from "../../components/home/Reservations/Reservations"
import ReservationsFrom from './ReservationsFrom';

const ReservationComp = () => {
   return (
      <div>
         <Reservations></Reservations>
         <ReservationsFrom></ReservationsFrom>
      </div>
   );
};

export default ReservationComp;