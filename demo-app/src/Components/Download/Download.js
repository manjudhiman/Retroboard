import React , {useEffect, useState } from 'react';
import './Styles/Download.css';
import {withRouter} from 'react-router-dom';
import {Button } from 'react-bootstrap';
import { CSVLink } from "react-csv";
import axios from 'axios';


const Download = (props) => {
    const [downloadData, updateDownloadData] = useState([])
   
    useEffect(()=>{
        console.log('useEffect : ', props)
        let path = props.location.search;
        let proxyUrl = 'https://aqueous-fjord-87609.herokuapp.com/',
        targetUrl = 'https://fast-brook-22761.herokuapp.com/details'+ path;
        axios.get(proxyUrl + targetUrl)
        .then(response => {
            console.log(" response " + JSON.stringify(response.data));
            updateDownloadData(response.data)
        });
    },[]);

    let headers = [
        { label: "What went well", key: "well" },
        { label: "What didn't go well", key: "notwell" },
        { label: "What to improve", key: "improve" },
        { label: "what to continue", key: "continue" }
      ];
       

    return(
            <CSVLink data={downloadData} headers={headers} target="_blank" filename="Report" className="download">
                 <Button  className="save" variant="primary" size="xs-sm">Download</Button>
            </CSVLink>  
    );

}
export default withRouter(Download);