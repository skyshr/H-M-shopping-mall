import React from 'react'
import { Link } from 'react-router-dom';
import Products from './Products';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    const row = [0, 1, 2, 3];

    return (
        <div>
            {/* <ProductCard /> */}
            <Container>
                {row.map((val, index) => 
                    <Products key={index} val={val} />
                )}
            </Container>
        </div>
    )
}

export default Layout