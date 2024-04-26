import React, { useState } from 'react';
import './App.css';

function App() {
  const [ topLeft, setTopLeft ] = useState(1)
  const [ topMiddle, setTopMiddle ] = useState(2)
  const [ topRight, setTopRight ] = useState(3)
  const [ middleLeft, setMiddleLeft ] = useState(4)
  const [ middleMiddle, setMiddleMiddle ] = useState(5)
  const [ middleRight, setMiddleRight ] = useState(6)
  const [ bottomLeft, setBottomLeft ] = useState(7)
  const [ bottomMiddle, setBottomMiddle ] = useState(8)
  const [ bottomRight, setBottomRight ] = useState(9)

  const handleTopLeftClick = () => {
    setTopLeft(topLeft + 1)
  }
  const handleMiddleLeftClick = () => {
    setMiddleLeft(middleLeft + 1)
  }
  const handleBottomLeftClick = () => {
    setBottomLeft(bottomLeft + 1)
  }
  const handleTopRightClick = () => {
    setTopRight(topRight - 1)
  }
  const handleMiddleRightClick = () => {
    setMiddleRight(middleRight - 1)
  }
  const handleBottomRightClick = () => {
    setBottomRight(bottomRight - 1)
  }
  const handleTopMiddleClick = () => {
    setTopMiddle(topLeft + topRight)
  }
  const handleMiddleMiddleClick = () => {
    setMiddleMiddle(middleLeft + middleRight)
  }
  const handleBottomMiddleClick = () => {
    setBottomMiddle(bottomLeft + bottomRight)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="block" onClick = {handleTopLeftClick} >
          {topLeft}
        </div>
        <div className="block" onClick = {handleTopMiddleClick}  >
          {topMiddle}
        </div>
        <div className="block" onClick={handleTopRightClick} >
          {topRight}
        </div>
      </div>
      <div className="row">
        <div className="block " onClick = {handleMiddleLeftClick}>
          {middleLeft}
        </div>
        <div className="block" onClick = {handleMiddleMiddleClick}>
          {middleMiddle}
        </div>
        <div className="block" onClick = {handleMiddleRightClick}>
          {middleRight}
        </div>
      </div>
      <div className="row">
        <div className="block" onClick = {handleBottomLeftClick}>
          {bottomLeft}
        </div>
        <div className="block" onClick = {handleBottomMiddleClick}>
          {bottomMiddle}
        </div>
        <div className="block" onClick = {handleBottomRightClick}>
          {bottomRight}
        </div>
      </div>
    </div>
  );
}

export default App;
