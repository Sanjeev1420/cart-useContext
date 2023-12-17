/** @format */

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";

function PriceCard(props) {
  const { netprice, subtotal, saved, shippingcost } = props;

  return (
    <div>
      <Card>
        <Card.Header as='h5'>Payment Details</Card.Header>
        <Card.Body>
          <Card.Text>Sub Total : {subtotal}</Card.Text>
          <Card.Text>Shipping : {shippingcost === 0 ? "Free" : shippingcost}</Card.Text>
          <Card.Text className ="mb-4">Saved : {saved}</Card.Text>
          <hr></hr>
          <Card.Text className ="mb-3">Total : {netprice}</Card.Text>
          <Button variant='primary'>Proceed to Payment</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PriceCard;
