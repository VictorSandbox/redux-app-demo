import React from "react"
// redux - connect react component with redux?
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"


function App(props) {   
    const amount = useSelector(state => state) 
    const dispatch  = useDispatch(state => state) 
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={() => dispatch(decrement)}>-</button>
            <button onClick={() => dispatch(increment)}>+</button>
        </div>
    )
}

 // return an object where the keys are the name of the prop your component wants,
 // values are the actual parts of the global state your
 // const mapStateToProps = (globalState) => ({count: globalState})


// export default connect(state => ({count: state}), {increment, decrement})(App)

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings

export default App