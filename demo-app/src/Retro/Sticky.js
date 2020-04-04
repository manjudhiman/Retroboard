import React from 'react';
import ReactDOM from 'react-dom';
import './Sticky.css'


const Sticky = props => {
  console.log("*(**dd)" , props.text.value);
  return(
    <div className="stickycss">
     <textarea onChange={props.changed} className="sticky" value= {props.text.value || ''} rows='3'> </textarea>
     </div>

  )
}

export default Sticky;
