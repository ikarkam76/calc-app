import logo from './img/logo.svg';
import './App.css';
import { buttons } from './buttons';
import { useState } from 'react';

function App() {
  const [print, setPrint] = useState(0);
  const [ars, setArs] = useState();
  const [symbol, setSymbol] = useState();

  const onClickButton = (event) => {
    switch (event.target.innerText) {
      case "C":
        setPrint(0);
        setArs();
        break;
      case "CE":
        setPrint(0);
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        if (!symbol) {
          setArs();
        }
        setPrint((prev) => prev + event.target.innerText);
        break;
      case "0":
        if (!symbol) {
          setArs();
        }
        if (symbol === "/") {
          alert('Don`t do this!!!');
        } else {
          setPrint((prev) => prev + event.target.innerText);
        }
        break;
      case "ARS":
        ars ? setPrint(ars) : alert("There is nothing in ARS!");
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (ars) {
          let res = 0;
          symbol === "+"
            ? (res = ars + Number(print))
            : symbol === "-"
            ? (res = ars - Number(print))
            : symbol === "*"
            ? (res = ars * Number(print))
            : symbol === "/"
            ? (res = ars / Number(print))
            : (res = ars);
          setArs(res);
          setSymbol(event.target.innerText);
          setPrint(0);
        } else {
          setArs(Number(print));
          setSymbol(event.target.innerText);
          setPrint(0);
        }
        break;
      case "%":
        if (ars) {
          let res = 0;
          symbol === "+"
            ? (res = ars + (ars / 100) * Number(print))
            : symbol === "-"
            ? (res = ars - (ars / 100) * Number(print))
            : symbol === "*"
            ? (res = (ars / 100) * Number(print))
            : symbol === "/"
            ? (res = (ars * 100) / Number(print))
            : setPrint(0);
          setArs(res);
          setSymbol();
          setPrint(0);
        } else {
          setArs(Number(print));
          setSymbol();
          setPrint(0);
        }
        break;
      case "=":
        if (ars) {
          let res = 0;
          symbol === "+"
            ? (res = ars + Number(print))
            : symbol === "-"
            ? (res = ars - Number(print))
            : symbol === "*"
            ? (res = ars * Number(print))
            : symbol === "/"
            ? (res = ars / Number(print))
            : setPrint(0);
          setArs(res);
          setSymbol();
          setPrint(0);
        } else {
          setArs();
          setSymbol();
          setPrint(0);
        }
        break;
      default:
        break;
    }
    
  }
  return (
    <div className="App">
      <div className="calc-form">
        <div className="calc-name">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="calc-screen">
          <div className="calc-screen-part">
            {ars ? <p className="calc-print top">ARS={ars}{symbol}</p> : ""}
          </div>
          <div className="calc-screen-part">
            <p className="calc-print bottom">{Number(print)}</p>
          </div>
        </div>
        <div className="calc-buttons">
          {buttons.map((item) => (
            <button
              key={item}
              type="button"
              className="calc-button"
              onClick={(event) => onClickButton(event)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
