const initialState = {};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getMyProfile": {
      const newState = {
        ...state,
        myInfo: action.payload,
        error: null
      };
      return newState;
    }
    default:
      return state;
  }
};

export default myProfileReducer;