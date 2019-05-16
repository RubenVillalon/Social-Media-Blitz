const initialState = {}

const userSignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'signup': {
            const newState = { ...state, token: action.payload, error: null, authenticated: true }
            return newState
        };
        case 'error': {
            const newState = { ...state, token: null, error: action.payload, authenticated: false }
            return newState
        };
        default:
            return state;
    }

}

export default userSignUpReducer;