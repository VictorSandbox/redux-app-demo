import React from "react"
// redux - connect react component with redux?
import {connect} from "react-redux"
import {increment, decrement} from "./redux"


function App(props) {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.sub}>-</button>
            <button onClick={props.add}>+</button>
        </div>
    )
}

 // return an object where the keys are the name of the prop your component wants,
 // values are the actual parts of the global state your
 // const mapStateToProps = (globalState) => ({count: globalState})
function mapStateToProps(globalState) {
   
    return {
        count: globalState
    }
    
}

const mapDispatchToProps = {
    add: increment,
    sub: decrement,
}


// https://react-redux.js.org/api/connect#connect
export default connect(mapStateToProps, mapDispatchToProps)(App)


// export default connect(state => ({count: state}), {increment, decrement})(App)

// export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)