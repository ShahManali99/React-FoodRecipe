import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FoodCard.css';

const FoodCard = ({foodItem}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={foodItem.image} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{foodItem.title}</Card.Title>
          <Button variant="primary">View Recipe</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default FoodCard;