import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const { data } = props;
    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/product/${data.id}`);
    }

    return (
            <div className='product-box' onClick={showDetail}>
                <img className="product-img" src={data.img} />
                {data.choice
                ? <div>Conscious choice</div>
                : <div>Normal choice</div>
                }
                <div>{data.title}</div>
                <div>{data.price}</div>
                <div>{data.new? "신제품" : "신제품아님"}</div>
            </div>
    )
}

export default ProductCard