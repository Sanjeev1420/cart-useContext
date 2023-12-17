/** @format */

import React, { useContext , useState} from "react";
import { CartContext } from "../App";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import CartItem from "./cartItem";
import PriceCard from "./priceCard";

const Cart = () => {
  const [cartData, setCartData] = useState(useContext(CartContext));
  const[netTotal,setNetTotal] = useState(0);
  const[subTotal,setSubtotal] = useState(0);
  const[saved,setSaved] = useState(0);
  const[shippingPrice] = useState(0);

  const handleRemove = (prd) => {
    const updatedCartData = removeProduct(prd);
    setCartData((cartData) => {
      return { ...cartData, products: updatedCartData };
    });
    updatePrice(updatedCartData);
  }
  
  const removeProduct = (prd) => {
    const cartd = [...cartData.products];
    const updatedData = cartd.filter((item) => item.id !== prd.id);
    return updatedData;
  }
  

  const handleQuantityBtn = (e,prd) => {
    const updatedCartData = updateQuantity(e,prd);
    setCartData((cartData) => {
      return { ...cartData, products: updatedCartData };
    });
    updatePrice(updatedCartData);
    
  }

  const updateQuantity = (e, prd) => {
    const cartCopy = [...cartData.products];
    const item = cartCopy.find((item) => item.id === prd.id);
    const index = cartCopy.indexOf(item);
    item.quantity = e.target.value;
    cartCopy[index] = { ...item };
    
    return cartCopy;
  };
  

  const updatePrice = (cartdata) => {
    let stotal = 0;
    let netTotal = 0;

    cartdata.forEach((item) => {
      let qnt = item.quantity || 0;
      let discountPrice = Math.ceil(item.price - item.price * (item.discountPercentage / 100));
      stotal += discountPrice * qnt;
      netTotal += item.price * qnt;
    });
  
    setNetTotal(stotal + shippingPrice);
    setSubtotal(stotal);
    setSaved(netTotal - (stotal + shippingPrice));
  }
  
  return (
    <Container>
      <Row>
        <Col xs={9}>
           {cartData.products.map((prd) => (
              <CartItem key={prd.id} product={prd} handleQntBtn={handleQuantityBtn}  handleRmv={handleRemove}/>
           ))}
        </Col>
        <Col>
           <PriceCard netprice={netTotal} subtotal={subTotal} saved={saved} shippingcost={shippingPrice}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
