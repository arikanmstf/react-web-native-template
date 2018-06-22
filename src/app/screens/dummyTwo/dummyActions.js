import { createAction } from 'redux-actions';
import { DUMMY_ACTION } from 'constants/actions/actionNames';

export const dummyAction = createAction(DUMMY_ACTION);

export const mapStateToProps = (state) => ({
  dummyField: state.dummy.dummyField,
  dummyFieldTwo: state.dummy.dummyFieldTwo,
});

export const mapDispatchToProps = (dispatch) => ({
  changeField: (value) => { dispatch(dummyAction(value)); },
});
