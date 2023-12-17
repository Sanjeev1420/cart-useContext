/** @format */

import React from "react";
import { Container, Row, Col , Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Stylesheets/cartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';

function CartItem(props) {
  const { product, handleQntBtn , handleRmv } = props;

  return (
    <Container className='mb-5'>
      <Row>
        <Col>
          <img src={product.thumbnail} width={220} heigth={240}></img>
        </Col>
        <Col xs={6} >
          <div className='cart-product-title'>{product.title}</div>
          <div >{product.description}</div>
          <div >
            <span className='text-decoration-line-through'>
              ₹{product.price}
            </span>
            <span >
              {"   " + Math.ceil(
                product.price -
                  product.price * (product.discountPercentage / 100)
              )}
            </span>
          </div>
          <div >{product.discountPercentage}% Offer</div>
          <div >
          <span className='cart-product-rating'>{product.rating}/</span>
            <span >5</span>
          </div>
        </Col>
        <Col className="mt-2 justify-content-center">
        <div className='mb-5'>
                <label htmlFor={`prdQuantity_${product.id}`}>Quantity</label>
                <input
                  type='number'
                  id={`prdQuantity_${product.id}`}
                  className='prdQuantityInp'
                  placeholder='1'
                  min={0} 
                  onChange={(event) => handleQntBtn(event , product)}
                />
        </div>
        <div>
           <Button variant="danger"  onClick={() => handleRmv(product)}><FontAwesomeIcon icon={faTrashArrowUp}/>{"   "}Remove</Button>
        </div>
        </Col>
      </Row>
      <hr ></hr>
    </Container>
   
  );
}

export default CartItem;
