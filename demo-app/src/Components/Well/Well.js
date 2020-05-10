import React from 'react';
import Button from 'react-bootstrap/Button';
import './Well.css';

const Well = (props) => {
  return (
    <div className="text-box">
    <h3>Went Well </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.props, 'well')}
    </div>
  );
}



export default Well;
