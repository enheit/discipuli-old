import { createAction } from 'redux-actions';

import * as actionTypes from './app.action-types';

export const increaseClicks = createAction(actionTypes.INCREASE_CLICKS);
