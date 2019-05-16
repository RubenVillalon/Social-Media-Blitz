const initialState = {};

const userDetailsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'getUserDetails': {
            const newState = { ...state, userDetails: action.payload, error: null}
            return newState
        }
        default: 
            return state;
    }
}

export default userDetailsReducer;