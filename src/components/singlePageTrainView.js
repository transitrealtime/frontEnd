import React from "react";
import {Link} from 'react-router-dom';
import '../styles/singlePageTrainView.css';

function singlePageTrainView ({id}){
  let train = ["7","J","Z","L","S","G","1","2","3","4","5","6","A","C","E","B","D","F","M","N","Q","R","W"];
  let display = train.map(item =>{
    return(
      <Link className={id === item ? id+"solid" : item+"-line"} to={`/train/${item}`}>{item}</Link>
    )
  })
  return(
    <div className="trains">
      {display}
    </div>
  )
}

export default singlePageTrainView;