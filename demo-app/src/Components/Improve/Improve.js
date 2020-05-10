import React from 'react';
import Button from 'react-bootstrap/Button';
import './Improve.css';

const Improve = (props) => {

  return (
    <div className="text-box">
    <h3>To Improve </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
       {props.texts(props.props, 'improve')}
    </div>
  );
}



export default Improve;
