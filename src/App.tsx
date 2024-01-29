import './App.css';
import { useState } from 'react';
import { numberOfRolls, Dices } from './utils/utils';
import { turnToObject } from './utils/utils';

interface imageObject {
  value: number;
  image: string;
}

function App() {
  const [input, setInput] = useState(1);
  const [result, setResult] = useState(0);
  const [images, setImages] = useState<imageObject[]>();

  const roll = (dice: Dices, rolls: number) => {
    const array = numberOfRolls(rolls, dice);
    const value = array.reduce((acc, number) => {
      return +acc + +number;
    }, 0);
    setResult(value);
    if (dice !== 100) {
      setImages(turnToObject(dice, array));
    } else {
      setImages(undefined);
    }
  };

  return (
    <div>
      <div>
        <label>
          Number of dice:{' '}
          <input
            type="number"
            value={input}
            onChange={(event) => {
              if (event.target.value !== '') {
                setInput(parseInt(event.target.value));
              } else {
                setInput(1);
              }
            }}
            min={0}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            roll(4, input);
          }}
        >
          d4
        </button>
        <button
          type="button"
          onClick={() => {
            roll(6, input);
          }}
        >
          d6
        </button>
        <button
          type="button"
          onClick={() => {
            roll(8, input);
          }}
        >
          d8
        </button>
        <button
          type="button"
          onClick={() => {
            roll(10, input);
          }}
        >
          d10
        </button>
        <button
          type="button"
          onClick={() => {
            roll(12, input);
          }}
        >
          d12
        </button>
        <button
          type="button"
          onClick={() => {
            roll(20, input);
          }}
        >
          d20
        </button>
        <button
          type="button"
          onClick={() => {
            roll(100, input);
          }}
        >
          d100
        </button>
      </div>
      <div>{result ? <h2>Total: {result}</h2> : null}</div>
      <div className="imageLanding">
        {images &&
          images.map((value, index) => {
            return <img src={value.image} alt="dice" key={index} />;
          })}
      </div>
    </div>
  );
}

export default App;
