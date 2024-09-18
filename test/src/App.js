import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");  // để lưu giá trị nhập vào
  const [result, setResult] = useState(""); // để lưu kết quả

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));  // sử dụng eval để tính toán chuỗi
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <h2>{result}</h2>
        </div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={() => setInput(input + "1")}>1</button>
          <button onClick={() => setInput(input + "2")}>2</button>
          <button onClick={() => setInput(input + "3")}>3</button>
          <button onClick={() => setInput(input + "+")}>+</button>
          <button onClick={() => setInput(input + "4")}>4</button>
          <button onClick={() => setInput(input + "5")}>5</button>
          <button onClick={() => setInput(input + "6")}>6</button>
          <button onClick={() => setInput(input + "-")}>-</button>
          <button onClick={() => setInput(input + "7")}>7</button>
          <button onClick={() => setInput(input + "8")}>8</button>
          <button onClick={() => setInput(input + "9")}>9</button>
          <button onClick={() => setInput(input + "*")}>*</button>
          <button onClick={() => setInput(input + "0")}>0</button>
          <button onClick={() => setInput(input + "/")}>/</button>
          <button onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
