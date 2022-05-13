import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Products = (props) => {
    const { val } = props;
    const [datas, setDatas] = useState(null);
    const [query, setQuery] = useSearchParams();

    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("searchQuery: ", searchQuery);
        let url = `https://my-json-server.typicode.com/skyshr/H-M-shopping-mall/products?q=${searchQuery}`;
        let response = await axios.get(url);
        let data = await response.data;
        // console.log(data);
        setDatas(data.slice(4 * val, 4 + 4 * val));
    }
    useEffect(() => {
        getProducts();
    }, [query])

    return (
        <Row>
            { datas &&
                datas.map((data) =>
                    <Col className="product-col" key={data.title} xs lg="3"><ProductCard data={data} /></Col>
                )
            }
        </Row>
    )
}

export default Products