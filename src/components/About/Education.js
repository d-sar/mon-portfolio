import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {  Row, Col} from 'react-bootstrap';

import educationData from '../../data/EducationData.json';

function Education() {
    return (

            
                    <Row className="g-3 education-grid" >
                        {educationData.map((edu, index) => (
                            <Col md={20} key={index} >
                                    <div className="d-flex align-items-center">
                                        <FaGraduationCap className="me-3  fs-2" />
                                        <div className="education-box">
                                            <strong>{edu.year}:</strong> <br />
                                            <span className="fw-bold">{edu.title}</span>
                                            <br />
                                            <span className="text-muted">{edu.description}</span>
                                        </div>
                                    </div>
                                
                            </Col>
                        ))}
                    </Row>
               
     
    );
}
export default Education;