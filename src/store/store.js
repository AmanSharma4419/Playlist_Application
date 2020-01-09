import { createStore } from "redux";

const initialState = {
  Links: []
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "UpdateState":
      const linksArr = initialState.Links
      linksArr.push(action.payload)
      return {...initialState, Links:linksArr}
    default:
      return state;
  }
}

const Store = createStore(Reducer);

export default Store;
