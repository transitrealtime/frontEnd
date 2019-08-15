import React from "react";
import Iframe from 'react-iframe';

const mtaStatusView = () =>{
    return(
        <Iframe 
            url="http://service.mta.info/ServiceStatus/status.html?widget=yes"
            width="230" 
            height="430" 
            frameBorder="0" 
            allowtransparency="true" 
            scrolling="no"
            text-decoration="none"
        />
    )
}

export default mtaStatusView;