import React from "react";
import { Row, Col } from "reactstrap";
import panelimg from "../../assets/images/panel.png";
import "./panel.css";
import { Link } from "react-router-dom";
const Panel = () => {
  return (
    <div className="">
      <div className="p-4">
        <Row>
          <Col lg="6" md="6" className="align-self-end">
            <h2 className="text">
              We cultivate the art of street smartness in children in teen-ages.
            </h2>
            <Link to="/registration">
              <button className="btn btn-success btn-lg">Register</button>
            </Link>
          </Col>
          <Col lg="6" md="6" className="img-container">
            <img src={panelimg} alt="panel-img" className="panel_img" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Panel;
