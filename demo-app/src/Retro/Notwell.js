import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';
import Button from 'react-bootstrap/Button';

const Notwell = (props) => {

  return (
    <div className="well">
    <h3 className="text-css">Didn't Go Well </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.props, 'notwell')}
    </div>
  );
}


export default Notwell;
