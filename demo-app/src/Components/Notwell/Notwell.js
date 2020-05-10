import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './Styles/Notwell.css';

const Notwell = (props) => {

  return (
    <div className="text-box">
    <h3>Didn't Go Well </h3>
    <Button variant="outline-dark" onClick={props.addHandler}>   +   </Button>
    {props.texts(props.notes, 'notwell')}
    </div>
  );
}

Notwell.propTypes = {
  texts: PropTypes.func,
  notes: PropTypes.object
}

export default Notwell;
