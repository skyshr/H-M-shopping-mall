import React from 'react';
import { Row, Col } from "react-bootstrap";

const ProductPage = ({ data }) => {
  return (
    <Row>
        <Col xs lg="6" className='card'>
            <img src={data.img} />
        </Col>
        <Col>
            <div>{data.title}</div>
            <div>{data.price}</div>
            <div>{data.price}</div>
        </Col>
    </Row>
  )
}

export default ProductPage