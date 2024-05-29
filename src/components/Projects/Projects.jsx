import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import download from "../../Assets/Projects/download.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Fligh Booking System"
              description="Designed and developed an airline booking management backend system using Sequelize, Node.js,RabbitMQ, microservices, cron jobs, JWT authentication, API Gateway, rate limiter, and AWS. Along with 5 other microservices"
              ghLink="https://github.com/inductionotg/FlightandSearchService"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
