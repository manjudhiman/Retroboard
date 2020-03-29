import React from 'react';
import Notwell from './Notwell'
import Well from './Well'
import Improve from './Improve'
import Continue from './Continue'
import './Retro.css'


const Retro = props => {
  return(
    <div className="container">

      <Well /> <Notwell />< Improve /> < Continue />
    </div>
  )

}

export default Retro;
