import React from "react";
import "./shef.css";
import shef1 from "../../../images/Shef-1.jfif";
import shef2 from "../../../images/shef-2.jfif";
import shef3 from "../../../images/shef-3.jpg";
const Shef = () => {
  return (
    <div>
      <h2 class="text-center">Our Shef</h2>
      <div class=" d-flex justify-content-center">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active shef-img">
              <img src={shef1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item shef-img">
              <img src={shef2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item shef-img">
              <img src={shef3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shef;
