import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';
import Button from 'react-bootstrap/Button';

const Well = () => {
  const [stickyPoints, updateStickyPoints] = useState(
    {
      0: {
        value: '',
      }
    }
  );

  const addHandler = function(){
    const points = {...stickyPoints}
    let keys = Object.keys(points)
    console.log("**keys", keys)
    let last_key = parseInt(keys[keys.length-1])
    console.log("**last_key :", last_key);
    points[last_key+1] = {
      value: '',
    }
    updateStickyPoints(
      points
    )
  }

  const updateText = (index,text) => {
    let points = {...stickyPoints}
    points[index].value = text;
    updateStickyPoints(
      points
    )
  }

  const texts = (points) => {
    console.log("*points**", points)
    return Object.keys(points).map((key) => {
      console.log("*kye* ," + key)
      return <Sticky text={points[key]} changed={(e) => updateText(key,e.target.value) }/>
    })
  };

  return (
    <div className="well">
    <h3 className="text-css">Went Well </h3>
    <Button variant="outline-dark" onClick={addHandler}>   +   </Button>
    {texts(stickyPoints)}
    </div>
  );
}



export default Well;
