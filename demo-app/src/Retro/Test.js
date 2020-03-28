import React from 'react';
import Sticky from './Sticky';
const Test = () => {
  return (
    <Sticky  val={initialState} changed={(e) => updatedState({value: e.target.value}) }/>

  )
}

export default Test;
