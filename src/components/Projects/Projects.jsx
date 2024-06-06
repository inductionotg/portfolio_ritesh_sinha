import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import download from "../../Assets/Projects/download.jpg";
import MOVIE from "../../Assets/Projects/MOVIE.png";
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
              title="Flight Booking System"
              description="Designed and developed an airline booking management backend system using Sequelize,Node.js,RabbitMQ microservices,cron jobs,JWT authentication, API Gateway, rate limiter, and AWS. Along with 5 other microservices"
              ghLink="https://github.com/inductionotg/FlightandSearchService"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MOVIE}
              isBlog={false}
              title="Movie Searching App"
              description="Developed a dynamic and responsive web application using React that allows users to search for movies, rate them, and enjoy a seamless autocomplete functionality. The app utilizes the OMDB API to fetch movie data and provides an interactive user experience with modern UI/UX design principles.Additionally, it features a dark and light theme switcher for enhanced user personalization"
              ghLink="https://github.com/inductionotg/Movie_OMDB_API"
              demoLink="https://movie-omdb-api-lemon.vercel.app/"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
