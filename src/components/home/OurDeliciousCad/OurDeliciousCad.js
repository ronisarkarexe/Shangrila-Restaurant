import React from "react";

const OurDeliciousCad = (props) => {
  console.log(props);
  const { title, describtion, img } = props.dt;
  return (
    <>
    <h2>sdkflskdlfs</h2>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img style={{ width: "166px" }} src={img} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{describtion}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDeliciousCad;
