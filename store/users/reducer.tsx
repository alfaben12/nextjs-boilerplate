import { HYDRATE } from 'next-redux-wrapper';
import { Action } from 'redux';
import { actionTypes } from './action';
import { UserState } from './interfaces/state.interface';

export const initialState: UserState = {
  list: null,
};

const reducer = (
  state = initialState,
  action: any,
): UserState => {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
    return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
