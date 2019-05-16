import Axios from "axios";

export const userSignUpDispatch = token => {
    return {
        type: 'signup',
        payload: token
    }
}

export const userSignUpError = err => {
    return {
        type: 'error',
        payload: err
    }
}


export const userSignUpAction = ({ firstName, LastName, email, password}) => (dispatch, getState) => {
    return Axios.post('https://propulsion-blitz.herokuapp.com/api/users', { email, password})
    .then ( response => {
        dispatch(userSignUpDispatch(response.data.token))
        localStorage.setItem('token', response.data.token)
        return response;
    }).catch( err => {
        dispatch(userSignUpError(err))
    })
}