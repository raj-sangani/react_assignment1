import React, { useState } from 'react';
import './App.css';



function App() {
  const [isBackgroundYellow, setIsBackgroundYellow] = useState(false);



  const changeColor = () => {
    setIsBackgroundYellow(!isBackgroundYellow);
  }

  return (
    <div className={isBackgroundYellow? 'background-yellow':'background-green'} style={{
      height: '100vh',
      display: 'flex',
    }}>
      <button className="btn" onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
