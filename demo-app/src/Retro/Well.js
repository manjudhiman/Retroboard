import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';
import Button from 'react-bootstrap/Button';

const Well = (props) => {
  return (
    <div className="well">
    <h3 className="text-css">Went Well </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.props, 'well')}
    </div>
  );
}



export default Well;
