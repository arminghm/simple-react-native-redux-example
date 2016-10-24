import { createStore } from 'redux';
import { counterReducer } from '../reducers/counter/counterReducer';

export default configureStore = () => {
  return createStore(counterReducer);
}
