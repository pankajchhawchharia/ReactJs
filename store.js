// npm install redux react-redux
import { createStore } from 'redux';

// Initial state
const initialState = {
  inputText: ''
};

// Reducer function
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_TEXT':
      return { ...state, inputText: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(inputReducer);

export default store;
