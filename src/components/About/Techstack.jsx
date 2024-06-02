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
  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
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
        <SiNextdotjs />
        <h1>NextJS</h1>
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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <h1>GoLang</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
