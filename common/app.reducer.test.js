import appReducer, { actionTypes, defaultState } from './app.reducer';

describe('app reducer', () => {
  it('should return initial state', () => {
    expect(appReducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle INCREASE_COUNTER', () => {
    const increaseAction = {
      type: actionTypes.INCREASE_COUNTER,
    };

    const expectedState = {
      counter: 1,
    };

    expect(appReducer(defaultState, increaseAction)).toEqual(expectedState);
  });

  it('should handle DECREASE_COUNTER', () => {
    const decreaseAction = {
      type: actionTypes.DECREASE_COUNTER,
    };

    const expectedState = {
      counter: -1,
    };

    expect(appReducer(defaultState, decreaseAction)).toEqual(expectedState);
  });
});
