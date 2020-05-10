import React from 'react';
import Button from 'react-bootstrap/Button';
import './Notwell.css';

const Notwell = (props) => {

  return (
    <div className="text-box">
    <h3>Didn't Go Well </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.props, 'notwell')}
    </div>
  );
}


export default Notwell;
