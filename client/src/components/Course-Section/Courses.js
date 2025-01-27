import React from "react";
import {Row, Col } from "reactstrap";
import vision_img from "../../assets/images/vision_img.jpg";
import "./courses.css";
// import CourseCard from "./CourseCards";

// const coursesData = [
//   {
//     id: "01",
//     title: "Web Design BootCamp-2022 for Beginners",
//     lesson: 12,
//     students: 12.5,
//     rating: 5.9,
//   },

//   {
//     id: "02",
//     title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
//     lesson: 12,
//     students: 12.5,
//     rating: 5.9,
//   },

//   {
//     id: "03",
//     title: "UI/UX BootCamp for Beginners in 2022",
//     lesson: 12,
//     students: 12.5,
//     rating: 5.9,
//   },
// ];

const Courses = () => {
  return (
    <div className="p-3 m-3 shadow rounded">
      <Row>
        <Col className=" text_area m-3">
          <h2 className="display-5">Our Vision</h2>
          <p className="lead">
            We at StreetSmartWale have a vision to sow the seed of Street
            Smartness at right ages in every child, thus empowering them to
            excel in whatever they choose to do in life.
          </p>
        </Col>
        <Col>
          <div class="img-container">
            <img class="vision_img" src={vision_img} alt="vision-img" />
          </div>
        </Col>
        {/* {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))} */}
      </Row>
    </div>
  );
};

export default Courses;
