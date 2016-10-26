import * as actionTypes from '../../actions/counter/actionTypes';

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  let count;
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {...state, count: state.count + 1};
    case actionTypes.DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}
