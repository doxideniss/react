import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCEESS = 'INITIALIZED_SUCCEESS';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCEESS:
      return {
        ...state,
        initialized: true
      };
    default:
        return state

  }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCEESS});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    })
};

export default appReducer

