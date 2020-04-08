import React, { useState} from 'react';
import Notwell from './Notwell'
import Well from './Well'
import Improve from './Improve'
import Continue from './Continue'
import './Retro.css'
import Sticky from "./Sticky";

const Retro = () => {
  const [stickyPoints, updateStickyPoints] = useState(
    {  well: {
      0: {
        value: '',
      }
    },
    notwell: {
      0: {
        value: '',
      }
    },
    continue: {
      0: {
        value: '',
      }
    },
    improve: {
      0: {
        value: '',
      }
    }
  }
  );

  const addHandler = function(key){
    // debugger;
    const points = {...stickyPoints}
    const p = points[key]
    // debugger;
    let keys = Object.keys(p)
    let last_key = parseInt(keys[keys.length-1])
    points[key][last_key+1] = {
      value: '',
    }
    updateStickyPoints(
      points
    )
  }

  const updateText = (index,text, k) => {
    let points = {...stickyPoints}

    points[k][index].value = text;
    updateStickyPoints(
      points
    )
  }

  const texts = (points, k) => {
    return Object.keys(points).map((key) => {
      return <Sticky text={points[key]} changed={(e) => updateText(key,e.target.value, k) }/>
    })
  };

  return(
    <div className="container">
      <Well props={stickyPoints.well} addHandler={() => addHandler('well')} texts={()=>texts(stickyPoints.well, 'well')}/>
       <Notwell props={stickyPoints.notwell} addHandler={() => addHandler('notwell')} texts={()=>texts(stickyPoints.notwell,'notwell')}/>
       <Improve props= {stickyPoints.improve} addHandler={() => addHandler('improve')} texts={()=>texts(stickyPoints.improve, 'improve')}/>
        <Continue props={stickyPoints.continue} addHandler={() => addHandler('continue')} texts={()=>texts(stickyPoints.continue, 'continue')}/>
    </div>
  )

}
// texts={() => texts(stickyPoints.continue)}

export default Retro;
