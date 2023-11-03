import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import errorImg from "../assets/error.png";
import styles from "../styles/Error.module.css";
export default function Error() {
  const[arr] = useState([1,2,3,4,5,6]);
  return (

    // <div>
    //   <Container style={{marginTop:"120px", marginBottom:"200px"}}>
    //     <Row style={{textAlign:"center"}}>
    //         <img src={errorImg} className={styles.errorImg} alt=""/>
    //         <h2>404 Page Not Found</h2>
    //     </Row>
    //   </Container>
    // </div>

    <div>
      htyyy
      <Container style={{marginTop:"120px", marginBottom:"200px",justifyContent:"center",alignItems:"center"}}>
        <Row>
          {arr.map((itm,idx)=>{
            return(
                <Col className={styles.colCard} sm="12" md="6" lg="4" >
                  Hello hyy
                </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
