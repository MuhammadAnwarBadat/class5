import React from 'react';
import logo from './logo.svg';
import './App.css';

function Child(Props) {
  return (
    <div>
      Child Number {Props.num}
    </div>
  );
}

export default Child;
