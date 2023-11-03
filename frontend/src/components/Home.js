import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider.js";
import img from "../assets/p4.jpg";
import styles from "../styles/Home.module.css";
import TestimonialSlider from "./TestimonialSlider.js";
export default function Home() {
  return (
    <>
      <Slider />
      <Container fluid className="mt-25">
        <Row>
          <Col sm="12" md="6" className={styles.col}>
            <h3 style={{color:"blue"}} className={styles.home_heading}>About the Renteza</h3>
            <p style={{textAlign:"left",marginTop:"30px"}}>
            {/* Culture living is dedicated to support authentic family to run their homestay and giving an opportunity to travellers to live along with natives in their houses and environment that helps travellers to know the lifestyle, language, cuisines, religions and other aspects of local culture. <br />We work on basic concept <strong>“Home away from home”</strong> and dedicated to provide quality accommodation for tourists and business visitors. */}
            Welcome to the world of clothing and accessories renting websites! This website revolutionize fashion, providing affordable and sustainable choices for style-conscious consumers. Discover the benefits, success stories, and environmental impact of this innovative approach to fashion. <strong> Let's</strong> dive in and explore the exciting possibilities these websites offer for your wardrobe and the planet.
            </p>
          </Col>
          <Col sm="12" md="6" className={styles.col}>
            <img src={img} alt="" height={300} className={styles.img_about} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{marginTop:"50px"}}>
            <h3 style={{textAlign:"center",color:"blue"}} className={styles.home_heading}>Why Renteza</h3>
        </Row>
        <Row>
        <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">High Quality</Card.Header>
              <Card.Body>
                <Card.Text>
                Exquisite Quality, Unmatched Luxury: Elevate Your Experience with Our Premium Selection.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Hygienic Accessories</Card.Header>
              <Card.Body>
                <Card.Text>
                Stay Safe in Style: Discover our Hygienic Accessories Collection for a Clean and Chic Everyday Look!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Minimal Rate</Card.Header>
              <Card.Body>
                <Card.Text>
                Unbeatable Rates for Maximum Value: Discover Our Minimal Rate Specials Today!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">No Hidden Charge</Card.Header>
              <Card.Body>
                <Card.Text>
                "Transparent Pricing, Discover Our Services with No Hidden Charges
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Free Delivery</Card.Header>
              <Card.Body>
                <Card.Text>
                Enjoy Complimentary Shipping on All Orders - No Minimum Purchase Required for Free Delivery!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Review and Testimonial</Card.Header>
              <Card.Body>
                <Card.Text>
                Customer Love, Stories of Delight and Satisfaction – Hear What Our Users Have to Say About Us.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      <TestimonialSlider/>
    </>
  );
}
