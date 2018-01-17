import { handleActions, createAction } from 'redux-actions';

const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const increase = createAction(INCREASE_COUNTER);
export const decrease = createAction(DECREASE_COUNTER);

const defaultState = {
  counter: 0,
};

const reducer = handleActions({
  [INCREASE_COUNTER]: state => ({
    counter: state.counter + 10,
  }),

  [DECREASE_COUNTER]: state => ({
    counter: state.counter - 1,
  }),
}, defaultState);

export default reducer;
