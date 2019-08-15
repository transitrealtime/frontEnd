import React from "react";
import {Link} from 'react-router-dom';
import '../styles/trainsView.css'

const trainsView = () =>{
    return(
        <div className="display">
            <Link id="seven" to="/train/7">
              7
            </Link>
            <Link id="red-line" to="/train/1">
              1
            </Link>
            <Link id="red-line" to="/train/2">
              2
            </Link>
            <Link id="red-line" to="/train/3">
              3
            </Link>
            <Link id="green-line" to="/train/4">
              4
            </Link>
            <Link id="green-line" to="/train/5">
              5
            </Link>
            <Link id="green-line" to="/train/6">
              6
            </Link>
            <Link id="yellow-line" to="/train/N">
              N
            </Link>
            <Link id="yellow-line" to="/train/Q">
              Q
            </Link>
            <Link id="yellow-line" to="/train/R">
              R
            </Link>
            <Link id="blue-line" to="/train/A">
              A
            </Link>
            <Link id="blue-line" to="/train/C">
              C
            </Link>
            <Link id="blue-line" to="/train/E">
              E
            </Link>
            <Link id="orange-line" to="/train/B">
              B
            </Link>
            <Link id="orange-line" to="/train/D">
              D
            </Link>
            <Link id="orange-line" to="/train/F">
              F
            </Link>
            <Link id="orange-line" to="/train/M">
              M
            </Link>
            <Link id="brown-line" to="/train/J">
              J
            </Link>
            <Link id="brown-line" to="/train/Z">
              Z
            </Link>
            <Link id="L-line" to="/train/L">
              L
            </Link>
            <Link id="G-line" to="/train/G">
              G
            </Link>
        </div>
    )
}

export default trainsView;