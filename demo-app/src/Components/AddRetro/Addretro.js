import  React, {useRef, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './Styles/Addretro.css';


const Addretro = (props) => {
    const [errorState, updateErrorState] = useState(false);
    const [retroboard, updateRetroval] = useState(false)
    const InputRef = useRef();



    useEffect(() => {
        console.log("--inside");
        console.log(props)
          // This is required to bypass the cors-origin request
        //     var proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
        //     targetUrl = 'https://fast-brook-22761.herokuapp.com/retro_info?retro=7'
        //     axios.get(proxyUrl + targetUrl)
        //     .then(response => response.data)
        //     .then(data => {
        //     updateStickyPoints(data)
        // });

    },[])

    function check() {
        console.log("here : " + InputRef.current.value);
        if (!InputRef.current.value || !/^[0-9]+$/.test(InputRef.current.value)) {
          console.log("Empty!")
           updateErrorState(true);
        } else {
           updateErrorState(false)
             // This is required to bypass the cors-origin request
            let retro_val  = 'retro=' + InputRef.current.value 
            let proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
            targetUrl = 'https://fast-brook-22761.herokuapp.com/create_retro?' + retro_val
            console.log(targetUrl)
            console.log(props.history)
            axios.post(proxyUrl + targetUrl)
            .then(response => response.data)
            .then(data => {
            console.log("data " + data)
            updateRetroval(true)
            props.history.push({
                pathname: '/retro_info',
                search: '?' + retro_val
            })
        });
              
        }
    }
    return (
             
            <>
            {/* retroboard && <Redirect to =`/${retro_val}` /> */}
           <div className="form-container">
            <label>
                <span>Sprint: </span><input type="text" ref={InputRef} className={  errorState ? "error" : "input" }/>
            </label>
               <div className="info"> * Please enter Integer numbers only!</div>
             <button type="submit" onClick={check}> Submit </button>
           </div>
           </>
    )
}

export default withRouter(Addretro);