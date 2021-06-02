import React from "react";
import Header from "../../../Header/Header";
import { ourDeliciousData } from "../../../Sheared/Sheared";
import Blogs from "../blogs/Blogs";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Reservations from "../Reservations/Reservations";
import Review from "../Review/Review";
import Shef from "../Shef/Shef";

const MainHomePage = () => {
  return (
    <div>
      <Header></Header>
      <ourDeliciousData></ourDeliciousData>
      <Home></Home>
      <Gallery></Gallery>
      <Blogs></Blogs>

      <Shef></Shef>
      <Reservations></Reservations>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default MainHomePage;
