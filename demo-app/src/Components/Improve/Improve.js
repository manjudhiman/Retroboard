import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './Styles/Improve.css';

const Improve = (props) => {

  return (
    <div className="text-box">
    <h3>To Improve </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
       {props.texts(props.notes, 'improve')}
    </div>
  );
}

Improve.propTypes = {
  texts: PropTypes.func,
  notes: PropTypes.object
}

export default Improve;
