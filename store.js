import {createStore} from 'redux;
// Initial state
const initialState = {count:0};
// reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1};
    case "Decreament":
      return {count: state.count -1};
    default:
      return state;
      // create the redux store
      const store = createStore(reducer);
      export default store;
