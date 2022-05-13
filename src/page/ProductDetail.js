import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container } from 'react-bootstrap';
import ProductPage from './ProductPage';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // console.log(params);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/skyshr/H-M-shopping-mall/products/${id}`;
    let response = await axios.get(url);
    let data = response.data;
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return product ? <Container><ProductPage data={product} /></Container> : null
}

export default ProductDetail