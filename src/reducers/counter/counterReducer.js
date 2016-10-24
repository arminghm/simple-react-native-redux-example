import * as actionTypes from '../../actions/counter/actionTypes';

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  let count;
  switch (action.type) {
    case actionTypes.INCREMENT:
      count = state.count + 1;
      return {...state, count};
    case actionTypes.DECREMENT:
      count = state.count - 1;
      return {...state, count};
    default:
      return state;
  }
}
