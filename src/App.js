import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("Purple");

  const handleColor = (event) => {
    const { value } = event.target;
    
    const regExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    const isHex = regExp.test(value);
    
    const newColor = isHex ? value : value;
    
    setColor(newColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <p>Background Color : {color} </p>
      <input type="text" onChange={handleColor} />
    </div>
  );
};

export default App;
