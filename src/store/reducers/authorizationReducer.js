const initialState = {}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login': {
            const newState = { ...state, token: action.payload, error: null, authenticated: true }
            return newState
        };
        case 'error': {
            const newState = { ...state, token: null, error: action.payload, authenticated: false }
            return newState
        };
        case 'logOut': {
            const newState = {}
            return newState
        }
        default:
            return state;
    }

}

export default authReducer;
