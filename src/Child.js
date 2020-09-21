import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
  console.log("value", value);
  return (
    <div>
      Child Number {value[0]}
      <br/>
      <button onClick={()=> { value[1](++value[0]) }}>Update Value</button>
    </div>
  );
}

export default Child;
