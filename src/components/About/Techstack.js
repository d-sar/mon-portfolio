import React from "react";
import { Col, Row } from "react-bootstrap";
import {  CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiPhp,
} from "react-icons/di";
import {
  SiRedis,
  SiSpringboot,
  SiAngularjs,
  SiOracle,
  SiFlutter,
  SiMysql,
  SiXampp,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">  
      <CgCPlusPlus /> <p>C++</p>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><p>Html</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp /><p>Php</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs /><p>Angular</p>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /><p>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot /><p>SpringBoot</p>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiMysql /><p>Mysql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp /><p>Xampp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis /><p>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /><p>OracleDB</p>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><p>Git</p>
      </Col>
      
      
     
    
    </Row>
  );
}

export default Techstack;
