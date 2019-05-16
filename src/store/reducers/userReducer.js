const initState = {}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'getUsers': {
            const newState = { ...state, users: action.payload, error: null }
            return newState
        }
        default:
            return state
    }
}

export default userReducer;
