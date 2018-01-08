import { handleActions } from 'redux-actions';

import * as actionTypes from './app.action-types'

const defaultState = {
  clickNumbers: 0
};

const reducer = handleActions({
  [actionTypes.INCREASE_CLICKS]: state => ({
    ...state,
    clickNumbers: state.clickNumbers + 1,
  })
}, defaultState);

export default reducer;