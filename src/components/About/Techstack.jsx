import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiAws
  
} from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h1>Javascript</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h1>TypeScript</h1>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h1>NodeJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h1>ReactJS</h1>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h1>MongoDB</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <h1>AWS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h1>NextJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> 
        <h1>HTML</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h1>CSS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h1>Github</h1>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h1>Redis</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h1>SQL</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <h1>GoLang</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h1>C++</h1>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
