import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Styles/Retrolist.css';
import axios from 'axios';

const Retrolist = (props) => {
    const [retroDetails, retroUpdatedDetails] = useState([]);

    useEffect(() => {
        console.log('useEffect : ')
        let proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
        targetUrl = 'https://fast-brook-22761.herokuapp.com/retro_details';
        axios.get(proxyUrl + targetUrl)
        .then(response => {
            console.log(response);
            retroUpdatedDetails(response.data);
        });

    },[]);


    // const test1 =  () => {
    //     console.log("inside test11 ");
    //     console.log('retroDetails ',retroDetails)
    //     return retroDetails.map((id, i)=>{
    //         return(<li> i </li>)
    //       })
    // }
    let details = function test() {
        console.log("==" + retroDetails)

        
        return retroDetails.map((val, i)=>{
            console.log("id i ", val , i)
           let text = "/retro_info?retro=" + val;
          return(<li className="content"><Link to={text}> Sprint {val}</Link> </li>)
        })

    };

    return( <div> 
        <h2 className="header-text">Sprint List</h2>
        <div>
            <ul className="content-text">
                {details()}
            </ul>

        </div>
        
    </div>

    );


};

export default Retrolist;