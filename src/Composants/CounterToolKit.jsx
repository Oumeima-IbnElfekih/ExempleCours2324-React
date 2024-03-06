
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux-toolkit/counterSlice';


function CounterToolKit() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterToolKit;
