import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';

const Well = () => {
  const [initialText, updatedText] = useState({value: '', showPerson: false});


  const addHandler = function(){
      const value = [...initialText]
      console.log("**");
      value.showPerson = !initialText
      updatedText(value)
    }


  return (
    <div>
    <h3>Went well </h3>
      <IoIosAdd onClick={addHandler} />
      <Sticky  val={initialText} changed={(e) => updatedText({value: e.target.value}) }/>
      <Sticky  val={initialText} changed={(e) => updatedText({value: e.target.value}) }/>

    </div>
  );
}



export default Well;
