import { createStore } from 'redux';
import reducer from '../reducers';

export default configureStore = () => {
  return createStore(reducer);
}
