import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(0);
  const clickedPlus = () => {
    setClicked(clicked + 1)
  }
  const clickedMinus = () => {
    setClicked(clicked - 1)
  }
  const [inputContent, setInputContent] = useState("Input Content");
  const UpdatedInputContent = (e) => {
    setInputContent(e.target.value)
  }
  const [changeColor, setChangeColor] = useState(" ")
  const colorInput = () => {
    setChangeColor("maroon")
  }
  const unColorInput = () => {
    setChangeColor("")
  }

  return (
    <div className="App">
      <div className='exo'>
        <h1>Exo 1</h1>
        <h3>{`You've clicked ${clicked} times`}</h3>
        <div>
          <button onClick={clickedPlus}>+1</button>
          <button onClick={clickedMinus}>-1</button>
        </div>
      </div>
      <div className='exo'>
        <h1>Exo 2</h1>
        <h3>{inputContent}</h3>
        <input onBlur={UpdatedInputContent} type="text" />
      </div>
      <div className='exo'>
        <h1>Exo 3</h1>
        <h3>On copy</h3>
        <input type="text" onCopy={(e) => alert(e.target.value)} />
      </div>
      <div className='exo'>
        <h1>Exo 4</h1>
        <h3>Change bg</h3>
        <input type="text" className={changeColor} onClick={colorInput} onBlur={unColorInput}/>
      </div>
      <div className='exo'>
        <h1>Exo 5</h1>
        <h3></h3>
        <button onClick={() => alert("Tu as cliqué sur le bouton")}>Alert on click</button>
      </div>
    </div>
  );
}

export default App;
