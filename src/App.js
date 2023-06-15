import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("Purple");

  // 사용자가 입력한 값이 유효한 16진수 색상 코드인지 확인하여 배경색상으로 설정
  const handleColor = (event) => {
    const { value } = event.target;
    
    // 16진수 색상 코드를 체크하기 위한 정규표현식 선언
    const regExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    const isHex = regExp.test(value);
    
    // 입력값이 16진수 색상 코드인 경우
    // 그대로 새로운 배경색상으로 설정
    // 입력값이 색상 이름인 경우 새로운 배경색상으로 변경하는 기능
    const newColor = isHex ? value : value;
    
    setColor(newColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <p>Background Color : {color} </p>
      <div className="input-container">
        <input type="text" onChange={handleColor} value={color}/>
      </div>
    </div>
  );
};

export default App;
