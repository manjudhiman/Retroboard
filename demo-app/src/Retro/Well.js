import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import Sticky from './Sticky';
import './Well.css';

const Well = () => {
  const [initialText, updatedText] = useState({value: '', showPerson: false, count: 1});


  const addHandler = function(){
      const value = {...initialText}
      console.log("**" + JSON.stringify(value));
      value.count = value.count + 1

      updatedText(value)
    }


  return (
    <div>
    <h3>Went well </h3>
      <IoIosAdd onClick={addHandler} />
      <Sticky  val={initialText} changed={(e) => updatedText({value: e.target.value}) }/>

    </div>
  );
}



export default Well;
