import { handleActions } from 'redux-actions';
import { dummyAction } from './dummyActions';

const initialState = {
  dummyField: 'dummyFieldValue',
  dummyFieldTwo: 'dummyFieldTwoValue',
};

const reducer = new Map([
  [
    dummyAction,
    (state, action) => ({ ...state, dummyField: action.payload }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
