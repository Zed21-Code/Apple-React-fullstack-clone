// import { Button } from 'bootstrap';
import React from 'react'
// import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; 
import { Container } from 'react-bootstrap';
function PageComponent(props) {
  return (
	  <>
		    <Row xs={1} md={2} className="g-2 bg_main">
      <Col md={6}> {/* This column will contain the first main card */}
        <Card className={props.body_bg}>
          <Card.Body className='border_rad'>
            <div className={props.rightheight}>
              <Card.Text className={props.descriptionclassname}>
                {props.description}
              </Card.Text>
              <Card.Title className={props.titleclassname}>
                {props.title}
              </Card.Title>
              <Card.Text className={props.priceclassname}>
                {props.pricedesciption}
              </Card.Text>
              <div className={props.linkwraper}>
                <Button variant="primary">Buy</Button>{' '}
                <li><a href="#" a>{props.secondlink}</a></li>
                <br/>
              </div>
            </div>
            <Card.Img variant="top" src={props.fourimg} alt='' />
          </Card.Body>
        </Card>
      </Col>

			  <Col md={6}
			  > {/* This column will contain the second main card */}
        <Card className={props.body_bg2}>
          <Card.Body className='border_rad'>
            <div className={props.rightheight2}>
              <Card.Text className={props.descriptionclassname2}>
                {props.description2}
              </Card.Text>
              <Card.Title className={props.titleclassname2}>
                {props.title2}
              </Card.Title>
              <Card.Text className={props.priceclassname2}>
                {props.pricedesciption2}
              </Card.Text>
              <div className={props.linkwraper2}>
                <Button variant="primary">Buy</Button>{' '}
                <li><a href="#" a>{props.secondlink2}</a></li>
                <br/>
              </div>
            </div>
            <Card.Img variant="top" src={props.fourimg2} alt='' />
          </Card.Body>
        </Card>
      </Col>
    </Row>

        
    </>
  )
}

export default PageComponent