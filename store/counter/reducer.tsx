import { INCREMENT_COUNTER, DECREMENT_COUNTER, CounterState } from './type';

const initialState: CounterState = {
  counter: 0,
};

// Creating my reducer
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: action.payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
