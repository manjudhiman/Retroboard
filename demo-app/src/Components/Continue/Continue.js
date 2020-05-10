import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './Styles/Continue.css';

const Continue = (props) => {

  return (
    <div className="text-box">
    <h3>To Continue </h3>
      <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.notes, 'continue')}
    </div>
  );
}

Continue.propTypes = {
  texts: PropTypes.func,
  notes: PropTypes.object
}

export default Continue;
