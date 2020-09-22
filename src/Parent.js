import React from 'react';
import Child2 from './Child2';
import Child from './Child';

function Parent(Props) {
  return (
    <div>
      Parent
      <Child></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
