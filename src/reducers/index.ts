import { combineReducers } from "redux";
import { COUNTER_ACTION } from "../actions";

// function doAction(state = 0, action: { type: string; paload: any }) {}
const counter = (state = 1, action: any) => {
  switch (action.type) {
    case COUNTER_ACTION.INCREASE:
      return state + 1;
    case COUNTER_ACTION.DECREASE:
      return state - 1;
    case COUNTER_ACTION.RESET:
      return (state = 0);
    default:
      return state;
  }
};

const reducer = combineReducers({
  //   doAction,
  counter,
});

export default reducer;
