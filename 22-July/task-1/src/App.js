/* eslint-disable react/style-prop-object */
import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from './actions';


function App() {

  const counter = useSelector ( state => state.counter);
  const isLogged = useSelector ( state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Balance: {counter} </h1>
      
      <label for="dep"> Deposit amount:  </label>
      <input type="number" id="dep" name="dep"  value={ this.state.dep } onChange={ this.handleChange } />
      <button onClick={() => dispatch(increment(5)) }> Deposit</button>

      <br></br><br></br><br></br>
      <button onClick={() => dispatch(decrement()) }> Withdrawl(50) </button>
      <button onClick={() => dispatch(decrement(100)) }> Withdrawl(100) </button>
      {isLogged ?<h3>Valuable Information I shouldn't see</h3> : '' }
      
    </div>
  );
}

export default App;
