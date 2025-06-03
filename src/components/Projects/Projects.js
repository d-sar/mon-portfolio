import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectsData from '../../data/Projects.json'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) =>(
          <Col md={4} key={index} className="project-card">
            <ProjectCard
              imgPath={project.imageSrc}
              isBlog={false}
              title={project.title}
              description={project.description}
               skills={project.skills}
               ghLink={project.source}
            />
          </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
