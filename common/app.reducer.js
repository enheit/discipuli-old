import { handleActions, createAction } from 'redux-actions';

const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const actionTypes = {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
};

const increase = createAction(INCREASE_COUNTER);
const decrease = createAction(DECREASE_COUNTER);

export const actionCreators = {
  increase,
  decrease,
};

export const defaultState = {
  counter: 0,
};

const reducer = handleActions({
  [INCREASE_COUNTER]: state => ({
    counter: state.counter + 1,
  }),

  [DECREASE_COUNTER]: state => ({
    counter: state.counter - 1,
  }),
}, defaultState);

export default reducer;
