import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {withRouter } from 'react-router-dom';
import {MdCancel} from 'react-icons/md';
import './Styles/Sticky.css';


const Sticky = (props) => {

  const [deleteComment, updateDeleteComment] = useState(false)
  console.log("=== props --->  " + JSON.stringify(props.id));
  console.log("==text " + JSON.stringify(props.text));
  console.log("==type " + JSON.stringify(props.type));
  function clickHandler() {
    console.log("clicked!!" + JSON.stringify(props));
    console.log("==loc" + JSON.stringify(props.location));
    let retro_number = props.location.search 
    if (props.id) {
      retro_number += '&key=' + props.id 
    }

    if (props.type) {
      retro_number += '&type=' + props.type
    }
    // This is required to bypass the cors-origin request
    var proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
    targetUrl = 'https://fast-brook-22761.herokuapp.com/delete' + retro_number
    axios.delete(proxyUrl + targetUrl)
    .then(response => {
      console.log("=== response ", response);
      window.location.reload(false);
      // updateDeleteComment(true)
    

      });
  };

  return(
    <div className="stickycss" id={props.id}>
     <textarea onChange={props.changed} className="sticky" value= {props.text.value || ''} rows='3' type= {props.type}> </textarea> 
     <span className="icon" onClick={clickHandler}><MdCancel /></span>
     
     </div>

  )
}

export default withRouter(Sticky);
