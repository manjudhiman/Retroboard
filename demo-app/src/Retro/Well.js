import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';

const Well = () => {
  const [stickyPoints, updateStickyPoints] = useState(
    {
      0: {
        value: '',
      },
      1: {
        value: '',
      }
    }

  );


  const addHandler = function(){
    const points = {...stickyPoints}
    updateStickyPoints(
      ...stickyPoints,
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
    return Object.keys(points).map((key) => {
          return <Sticky text={points[key]} changed={(e) => updateText(key,e.target.value) }/>
  })
};

  return (
    <div>
    <h3>Went well </h3>
    <IoIosAdd onClick={addHandler} />
    {texts(stickyPoints)}
    </div>
  );
}



export default Well;
