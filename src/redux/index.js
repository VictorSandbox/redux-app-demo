/**
 * Challenge: set up redux action creators, reducer, and store
 * We'll be building a counter app to start out.
 * Read the comments below for the step-by-step challenges
 */
import {createStore} from "redux"
// const redux = require("redux")

// 1. Create action creators for having the count "increment" and "decrement"
export function increment() {
  return {
    type: "Increment"
  };
}

export function decrement() {
  return {
    type: "Decrement"

  };
}

// 2. Create a reducer to handle your increment and decrement actions
function reducer(amount = 0, action) {
  // return new state based on the incoming type. return will go redux store.
  switch (action.type) {
    case "Increment":
      return amount + 1

   case "Decrement":
        return amount - 1
  
    default:
      return amount;
  }
}


// 3. Create a new Redux store
const store = createStore(reducer)

// 4. Set up the subscribe function so we can more easily see the changes to the Redux state as they happen
store.subscribe(() => {
    console.log(store.getState())
})

export default store
