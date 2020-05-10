import React, { useState, useEffect, fragment} from 'react';
import Notwell from '../../Components/Notwell/Notwell';
import Well from '../../Components/Well/Well';
import Improve from '../../Components/Improve/Improve';
import Continue from '../../Components/Continue/Continue';
import Sticky from '../../Components/Sticky/Sticky';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Banner from 'react-js-banner';
import './Retro.css'

const Retro = () => {
  const [stickyPoints, updateStickyPoints] = useState(
      {  well: null,
        notwell: null,
        continue: null,
        improve: null
  }
  );

  const [error, updateError] = useState(false)
  const [dataLoaded, updateDataLoadedState] = useState(false)
  useEffect(() => {
    // This is required to bypass the cors-origin request
    var proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
    targetUrl = 'https://fast-brook-22761.herokuapp.com/retro_info?retro=2'
    axios.get(proxyUrl + targetUrl)
    .then(response => response.data)
    .then(data => {
      updateStickyPoints(data)
  });
  },[]);

  const addHandler = function(key){
    const points = {...stickyPoints}
    const p = points[key]
    let keys = Object.keys(p)
    let last_key = parseInt(keys[keys.length-1])
    points[key][(last_key+1).toString(10)] = {
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
    if (points == null) {
      return
    }

    return Object.keys(points).map((key, id) => {
      console.log("key ", key)
      console.log("id  ", id)
      return <Sticky text={points[key]} key={id} changed={(e) => updateText(key,e.target.value, k) }/>
    })
  };

  const saveButton =() => {
    const json2 = JSON.stringify({...stickyPoints})
    json2.replace(/".+?"/g, s => s.toString())
    // This is required to bypass the cors-origin error.
    var proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
    targetUrl = 'https://fast-brook-22761.herokuapp.com/retro_info?retro=2'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

    };
    axios.post(proxyUrl + targetUrl, json2, requestOptions)
    .then(response => {
      console.log("response ", response.status);
      if (response.status === '204') {
        console.log("Saved!")
        updateDataLoadedState(true)

        updateError(false)
      }
    })
    .catch(function(error){
      updateError(true)
    })
  };

 let banner = <div> </div>
 if (dataLoaded) {
    banner =  <Banner title="Changes Saved!!" className="banner" visibleTime={1000}/>
  }

 let savebtn = <Button className="save" variant="primary" size="sm" onClick={saveButton}>Try Again!</Button>
 if (!error) {
    savebtn  = <Button className="save" variant="primary" size="sm" onClick={saveButton }>Save</Button>
  }

  return(
    <React.Fragment>
      {banner}
      <div className="container">
        <Well props={stickyPoints.well} addHandler={() => addHandler('well')} texts={()=>texts(stickyPoints.well, 'well')}/>
        <Notwell props={stickyPoints.notwell} addHandler={() => addHandler('notwell')} texts={()=>texts(stickyPoints.notwell,'notwell')}/>
       <Improve props= {stickyPoints.improve} addHandler={() => addHandler('improve')} texts={()=>texts(stickyPoints.improve, 'improve')}/>
        <Continue props={stickyPoints.continue} addHandler={() => addHandler('continue')} texts={()=>texts(stickyPoints.continue, 'continue')}/>
      </div>
      <div>
        {savebtn}
      </div>
    </React.Fragment>
  )
}

export default Retro;
