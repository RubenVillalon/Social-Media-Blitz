import axios from 'axios';

export const myProfileToState = myInfo => {
    return {
        type: 'getMyProfile',
        payload: myInfo
    }
}

export const getMyProfile = () => (dispatch, getState) => {
    const token = getState().authorizationReducer.token;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    axios.get("https://propulsion-blitz.herokuapp.com/api/me", config)
    .then( response => {
        console.log(response);
        dispatch(myProfileToState(response.data))
    })
    .catch(error => error)
    
}

