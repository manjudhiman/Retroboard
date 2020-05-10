import React from 'react';
import Button from 'react-bootstrap/Button';
import './Continue.css';

const Continue = (props) => {

  return (
    <div className="text-box">
    <h3>To Continue </h3>
      <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.props, 'continue')}
    </div>
  );
}

export default Continue;
