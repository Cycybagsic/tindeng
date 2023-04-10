import React from 'react';
import { redirect } from 'react-router';
import {Link} from 'react-router-dom';



import { Row, Col } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

const LoginScreen = () => {
  return (
    <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-100'>
    
      
    
        <MDBCol md='5'>
          <MDBCardBody className='d-flex flex-column'>
    
            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-4x me-4" style={{ color: '#9E517F' }}/>
              <span className="h2 fw-bold mb-2">AMORETTO</span>
            </div>
    
            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '3px'}}>Sign into your account</h5>
    
              <MDBInput wrapperClass='mb-2' label='Email address' id='formControlLg1' type='email' size="g"/>
              <MDBInput wrapperClass='mb-2' label='Password' id='formControlLg2' type='password' size="lg"/>
    
            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
            <Row className="py-3">
        <Col>
          Don't have an account ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/Register"}>
            Register
          </Link>
        </Col>
      </Row>
    
            <div className='d-flex flex-row justify-content-start'>
             
  
            </div>
    
          </MDBCardBody>
        </MDBCol>
    
      </MDBRow>
    </MDBCard>
    </MDBContainer> 
  );
};





export default LoginScreen;



