// set up redux store and reducer

import {createStore} from 'redux';

const initialState = {sharedData : "Shared Data"};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA' :
      return {...state, sharedData: action.payload};
      default :
      return state;
  }
};

const Store = createStore(reducer);

export default Store;
