
import './App.css';
import {useState} from 'react';
import logo from './images/google-logo.png';

function App() {
const [text,setText] = useState("");

const inputTextHandler = (event)=>{
  setText(event.target.value);
}

 const searchButtonHandler = ()=>{
  window.open(`https://www.google.com/search?q=${text}`);
 }

console.log(text,"text");
  return (
    <div className="App">
      <header className="App-header">
       <div>
       <img src={logo} alt=""/>
         </div> 
        <input id="textid" onChange={inputTextHandler} type="text" ></input>
        <button id="buttonid" onClick={searchButtonHandler}>Google Search</button>
      </header>
    </div>
  );
}

export default App;
