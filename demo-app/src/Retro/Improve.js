import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';
import Button from 'react-bootstrap/Button';

const Improve = (props) => {

  return (
    <div className="well">
    <h3 className="text-css">To Improve </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.props, 'improve')}
    </div>
  );
}



export default Improve;
