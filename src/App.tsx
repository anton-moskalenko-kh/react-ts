import React from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increaseByAmount, increment, reset} from "./redux/slices/counterSlice";
import styles from './App.module.css'

const App = () => {

   const counter = useAppSelector(state => state.counterSlice.value);
   const dispatch = useAppDispatch()


  return (
      <div className={styles.counterBlock}>
          <h3>{counter}</h3>
          <button onClick={() => {
                dispatch(increment())
          }}>Increment</button>
          <button onClick={() => {
                dispatch(decrement())
          }}>Decrement</button>
          <button onClick={() => {
                dispatch(increaseByAmount(10))
          }}>Increase by 10</button>
          <button onClick={() => {
                dispatch(reset())
          }}>Reset</button>
      </div>
  );
};

export default App;
