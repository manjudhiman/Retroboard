import React from 'react';
import ReactDOM from 'react-dom';
import './Sticky.css'


const Sticky = props => {
  console.log("*(**dd)" , props.text.value);
  return(
    <div className="stickycss">
     <input type="text" onChange={props.changed} className="sticky" value= {props.text.value || ''} />
     </div>

  )
}

export default Sticky;
