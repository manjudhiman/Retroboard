import React from 'react';
import ReactDOM from 'react-dom';
import './Sticky.css'


const Sticky = props => {
  console.log("*(**dd)" , props.val);
  return(
    <div>
     <input type="text" onChange={props.changed} className="sticky" value= {props.val.value || ''} />
     </div>

  )


}

export default Sticky;
