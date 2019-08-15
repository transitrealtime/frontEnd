import React from "react";
import { Link } from 'react-router-dom';
import '../styles/trainsView.css'

const trainsView = () => {
  return (
    <div className="display">
      <Link className="seven" to="/train/7">7</Link>
      <div className="break"></div>
      <Link className="brown-line" to="/train/J">J</Link>
      <Link className="brown-line" to="/train/Z">Z</Link>
      <div className="break"></div>
      <Link className="L-line" to="/train/L">L</Link>
      <Link className="L-line" to="/train/S">S</Link>
      <Link className="G-line" to="/train/G">G</Link>
      <div className="break"></div>
      <Link className="red-line" to="/train/1">1</Link>
      <Link className="red-line" to="/train/2">2</Link>
      <Link className="red-line" to="/train/3">3</Link>
      <div className="break"></div>
      <Link className="green-line" to="/train/4">4</Link>
      <Link className="green-line" to="/train/5">5</Link>
      <Link className="green-line" to="/train/6">6</Link>
      <div className="break"></div>
      <Link className="blue-line" to="/train/A">A</Link>
      <Link className="blue-line" to="/train/C">C</Link>
      <Link className="blue-line" to="/train/E">E</Link>
      <div className="break"></div>
      <Link className="orange-line" to="/train/B">B</Link>
      <Link className="orange-line" to="/train/D">D</Link>
      <Link className="orange-line" to="/train/F">F</Link>
      <Link className="orange-line" to="/train/M">M</Link>
      <div className="break"></div>
      <Link className="yellow-line" to="/train/N">N</Link>
      <Link className="yellow-line" to="/train/Q">Q</Link>
      <Link className="yellow-line" to="/train/R">R</Link>
      <Link className="yellow-line" to="/train/W">W</Link>
    </div>
  )
}

export default trainsView;