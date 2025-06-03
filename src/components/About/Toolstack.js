import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /><p>Andriod Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><p>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><p>Postman</p>
      </Col>  
    </Row>
  );
}

export default Toolstack;
