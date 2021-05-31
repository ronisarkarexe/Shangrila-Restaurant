import React from "react";
import OurDeliciousCad from "../OurDeliciousCad/OurDeliciousCad";
import breakFast from "../../../images/breakFastImg.jpg";
import lunch from "../../../images/lunch.jfif";
import dinner from "../../../images/dinner.jpg";
import desert from "../../../images/desert.jpg";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ourDeliciousData: state.ourDeliciousData
  }
}
const OurDelicious = (props) => {
  console.log('log from our', props);
  const fakeData = [
    {
      title: "Break Fast",
      describtion:
        "Lorem ipsum dolor sit amet edit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      img: breakFast,
    },
    {
      title: "Delicious Lunch",
      describtion:
        "Lorem ipsum dolor sit amet edit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      img: lunch,
    },
    {
      title: "Dinner",
      describtion:
        "Lorem ipsum dolor sit amet edit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      img: dinner,
    },
    {
      title: "Desserts",
      describtion:
        "Lorem ipsum dolor sit amet edit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      img: desert,
    },
  ];
  return (
    <div class="row d-flex justify-content-center">
      {props.OurDelicious?.map((dt) => (
        <OurDeliciousCad dt={dt}></OurDeliciousCad>
      ))}
    </div>
  );
};

export default connect(mapStateToProps) (OurDelicious);
