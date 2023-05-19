import React, { useState } from 'react';
import './style.css';
import { BiUpArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button className='up'
        onClick={() => {
          setNum(num + 1);
        }}
      >
        <BiUpArrow />
      </button>
      <div className='btn'> 
      <button
        onClick={() => {
          setNum(num - 10);
        }}
      >
        <BiLeftArrow/>
      </button>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 10);
        }}
      >
        <BiRightArrow/>
      </button>
      </div>
      <button className='up'
        onClick={() => {
          setNum(num - 1);
        }}
      >
        <BiDownArrow/>
      </button>
    </div>
  );
}
