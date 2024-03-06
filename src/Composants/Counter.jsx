// src/components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
