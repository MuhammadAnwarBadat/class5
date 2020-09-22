import Child2 from "./Child2"

const numberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.val
      case 'DECREMENT':
        return state - action.val
    }
  }
  
  export default numberReducer;