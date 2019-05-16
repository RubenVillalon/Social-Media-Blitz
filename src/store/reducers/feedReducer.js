const initState = {}

const feedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'getFeed': {
            const newState = { ...state, feed: action.payload, error: null }
            return newState
        }
        case 'addBlitz': {
            const newState = {...state, feed: action.payload}
            return newState;
        }
        default:
            return state
    }
}

export default feedReducer;
