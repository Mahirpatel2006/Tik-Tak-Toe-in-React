import React, { useState, useEffect } from 'react';
import "./game.css";
import circleImage from '../assets/circle (1).png';
import croseImage from '../assets/close (2).png';

const Game = () => {
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);
  const [isDisabled4, setIsDisabled4] = useState(false);
  const [isDisabled5, setIsDisabled5] = useState(false);
  const [isDisabled6, setIsDisabled6] = useState(false);
  const [isDisabled7, setIsDisabled7] = useState(false);
  const [isDisabled9, setIsDisabled9] = useState(false);
  const [isDisabled8, setIsDisabled8] = useState(false);

  const [n, setN] = useState(1);
  const [winner, setWinner] = useState(null); // add a winner state

  const cells = document.querySelectorAll('.cell');
console.log(cells);

  const ch1 = () => {
    setIsDisabled1(true);
  };
  const ch2 = () => {
    setIsDisabled2(true);
  };
  const ch3 = () => {
    setIsDisabled3(true);
  };
  const ch4 = () => {
    setIsDisabled4(true);
  };
  const ch5 = () => {
    setIsDisabled5(true);
  };
  const ch6 = () => {
    setIsDisabled6(true);
  };
  const ch7 = () => {
    setIsDisabled7(true);
  };
  const ch8 = () => {
    setIsDisabled8(true);
  };
  const ch9 = () => {
    setIsDisabled9(true);
  };

  const handleClick = (e) => {
    setN(n + 1);
    if (n % 2 === 0) {
      const cell = e.target;
      const img = document.createElement('img');
      img.src = circleImage;
      cell.appendChild(img);
    } else {
      const cell = e.target;
      const img = document.createElement('img');
      img.src = croseImage;
      cell.appendChild(img);
    }
    checkWin();
  };

  const checkWin = () => {
    const cells = document.querySelectorAll('.cell');
  
    // Check rows
    if (cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML && cells[0].innerHTML) {
      setWinner(cells[0].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
    if (cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML && cells[3].innerHTML) {
      setWinner(cells[3].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
    if (cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML && cells[6].innerHTML) {
      setWinner(cells[6].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
  
    // Check columns
    if (cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML && cells[0].innerHTML) {
      setWinner(cells[0].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
    if (cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML && cells[1].innerHTML) {
      setWinner(cells[1].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
    if (cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML && cells[2].innerHTML) {
      setWinner(cells[2].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
  
    // Check diagonals
    if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML) {
      setWinner(cells[0].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
    if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML) {
      setWinner(cells[2].innerHTML.includes('circle') ? 'Circle' : 'Cross');
    }
  };

  const restartGame = () => {
    setIsDisabled1(false)
    setIsDisabled2(false)
    setIsDisabled3(false)
    setIsDisabled4(false)
    setIsDisabled5(false)
    setIsDisabled6(false)
    setIsDisabled7(false)
    setIsDisabled8(false)
    setIsDisabled9(false)
    cells.forEach((cell) => {
      cell.innerHTML = '';
      
    });
    setWinner(null);
    
  }

  return (
    <div className='main'>
      <h1>Tic Tac Toe</h1>
      {winner && <h2>Winner: {winner}</h2>}
      <div className="board">
      <button className="cell" onClick={(e) => { handleClick(e); ch1(); }} disabled={isDisabled1}></button>
      <button className="cell" onClick={(e) => { handleClick(e); ch2(); }} disabled={isDisabled2}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch3(); }} disabled={isDisabled3}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch4(); }} disabled={isDisabled4}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch5(); }} disabled={isDisabled5}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch6(); }} disabled={isDisabled6}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch7(); }} disabled={isDisabled7}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch8(); }} disabled={isDisabled8}></button>
        <button className="cell" onClick={(e) => { handleClick(e); ch9(); }} disabled={isDisabled9}></button>
      </div>
      <br />
      <button id="restart" onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default Game;