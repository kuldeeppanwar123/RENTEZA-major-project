import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/About.module.css";
import quality from "../assets/About/quality.png";
import integrity from "../assets/About/integrity.png";
import respect from "../assets/About/respect.png";
import responsibility from "../assets/About/responsibility.png";
import innovative from "../assets/About/innovative.png";
import teamwork from "../assets/About/teamwork.png";
import kuldeep from "../assets/Team/kuldeep.jpg";
import Nikhilesh from "../assets/Team/nikhilesh.png";
import jainaam from "../assets/Team/jainaam.png";

export default function About() {
  const [width,setWidth] = useState(window.innerWidth);
  const detectWidth=()=>{
    setWidth(window.innerWidth);
  }
 
  useEffect(()=>{
    window.addEventListener('resize',detectWidth);
    return()=>{
      window.removeEventListener('resize',detectWidth);
    }
  })
 

  return (
    <div style={{ marginTop: "120px" }}>
      <Container>
        <h2 className={styles.headings}>About us</h2>
        <Row>
          <p>
            {" "}
            Welcome to the world of clothing and accessories renting websites! This website revolutionize fashion, providing affordable and sustainable choices for style-conscious consumers. Discover the benefits, success stories, and environmental impact of this innovative approach to fashion. <strong> Let's</strong> dive in and explore the exciting possibilities these websites offer for your wardrobe and the planet.
          </p>
        </Row>
      </Container>

      <Container>
        <h2 className={styles.headings}>Our Mission</h2>
        <Row>
          <p>
            {" "}
            At Renteza, our mission is to empower individuals to make sustainable and affordable choices by providing a seamless platform for renting, sharing, and enjoying a wide range of accessories. We aim to foster a trustworthy and vibrant community, reduce waste, and promote responsible consumption, all while delivering exceptional user experiences.
          </p>
        </Row>
      </Container>

      <Container>
        <h2 className={styles.headings}>Our Values</h2>
        <Row>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={quality} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>Quality</Card.Title>
                <Card.Text className={styles.card_text}>
                  We deliver highest quality services at all times.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={teamwork} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>Teamwork</Card.Title>
                <Card.Text className={styles.card_text}>
                  Teamwork has incredible power to increase productivity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={respect} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>Respect</Card.Title>
                <Card.Text className={styles.card_text}>
                  Everyone is respected and we deeply respect to everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={integrity} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>
                  Integrity
                </Card.Title>
                <Card.Text className={styles.card_text}>
                  Integrity is an ingredient of our group, we never compromise
                  it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={responsibility} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>
                  Responsibility{" "}
                </Card.Title>
                <Card.Text className={styles.card_text}>
                  Our team know their responsibility and work accordingly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={innovative} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>
                  Innovative
                </Card.Title>
                <Card.Text className={styles.card_text}>
                  We are always open to introducing innovative and creative
                  ideas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className={styles.headings}>Our Team</h2>
        <Row>
          <Col md="12" lg="4" className={styles.image_container}>
            <img src={kuldeep} alt=" " className={styles.teamImage} />
          </Col>
          <Col md="12" lg="8" className={styles.image_text}>
            {/* <h4 style={{textAlign:"center"}}><strong>"Kuldeep Panwar"</strong></h4> */}
            <p >
            I am <strong>Kuldeep Panwar</strong> student of Acropolis intitute of Technology and Research Indore pursuing B. Tech in computer science and information techonology. I am a MERN stack entusiast and always eager to learn new skills.I worked collaboratively with my colleagues on this project. for frontend i worked on UI/UX design and created different components in react js. my main role for this project is backend developer i have written various APIs for communicating with frontend and fetching data from database in Express Js using Node Js.
            </p>
          </Col>
          {width >= 992 ? (
            <>
              <Col md="12" lg="8" className={styles.image_text}>
                <p>
                 I am <strong>Nikhilesh Chouhan </strong>, student of Acropolis intitute of Technology and Research Indore pursuing B. Tech in computer science and information techonology. I am currently learning MERN stack development and worked on this project called "Culture Living" i worked on various domains in this project in frontend i worked on signup login page using formik (react library) and contributed to other component as well. My main role for this project was to develop database.and i created various models for database using MongoDB.
                </p>
              </Col>
              <Col md="12" lg="4" className={styles.image_container}>
                <img src={Nikhilesh} alt=" " className={styles.teamImage}  />
              </Col>
            </>
          ) : (
            <>
              <Col md="12" lg="4" style={{marginTop:"65px"}} className={styles.image_container}>
                <img src={Nikhilesh} alt=" " className={styles.teamImage} />
              </Col>
              <Col md="12" lg="8" style={{marginBottom:"65px !important"}} id={styles.temp} className={styles.image_text}>
                <p >
                I am <strong>Nikhilesh Chouhan </strong>, student of Acropolis intitute of Technology and Research Indore pursuing B. Tech in computer science and information techonology. I am currently learning MERN stack development and worked on this project called "Culture Living" i worked on various domains in this project in frontend i worked on signup login page using formik (react library) and contributed to other component as well. My main role for this project was to develop database.and i created various models for database using MongoDB.
                </p>
              </Col>
            </>
          )}         
          <Col md="12" lg="4" className={styles.image_container}>
            <img src={jainaam} alt=" " className={styles.teamImage} />
          </Col>
          <Col md="12" lg="8" className={styles.image_text}>
            <p >
            I am <strong>Jainaam Singhai </strong>, student of Acropolis intitute of Technology and Research Indore pursuing B. Tech in computer science and information techonology. I have learnt MERN stack development, and in order to create some product by applying my knowledge i am working on this project "Culture Living" i mainly worked on design frontend component for different views those are created by using React and i also contributed for connect frontend with backend APIs.
            </p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}