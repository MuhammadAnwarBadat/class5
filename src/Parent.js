import React from 'react';
import Child from './Child';

function Parent(Props) {
  return (
    <div>
      Parent
      <Child num={Props.num}></Child>
    </div>
  );
}

export default Parent;