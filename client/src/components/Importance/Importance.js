import React from "react";
import "./importance.css";
import { Row, Col } from "reactstrap";
import what_is_img from "../../assets/images/what is.png";
import why_is_img from "../../assets/images/why is.png";
const Importance = () => {
  return (
    <Row className="d-flex">
      <Col md="6">
        <div className="section m-3 p-3 text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
          <img src={what_is_img} className="img_img" alt="what is img" />
          <h2 className="display-5">What is Street Smartness</h2>
          <p className="lead">
            Street Smartness is the skill to come out of every situation with
            the favorable outcome. It is also compared with practical
            intelligence from Triarchic Theory of Intelligence, formulated by
            psychologist Robert Sternberg. According to him, practical
            intelligence is the intelligence that allows people to operate well
            in the real world and solve practical problems.
          </p>
        </div>
      </Col>
      <Col md="6">
        <div className="section m-3 p-3 bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
          <img src={why_is_img} className="img_img" alt="why is img"/>
          <h2 className="display-5">Why Street Smartness</h2>
          <p className="lead">
            Book smartness is good, but it can take you to an extent, whereas
            Street Smartness, unfortunately not stressed on enough is a prime
            ingredient to successful life recipe. "Well, first of all, we did
            lots of studies where we show practical intelligence doesn't
            correlate with G. We have probably two dozen studies that practical
            intelligence better predicts job success than IQ." - Robert
            Sternberg
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Importance;
