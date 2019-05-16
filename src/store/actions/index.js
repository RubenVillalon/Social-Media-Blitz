
import axios from 'axios';

export const userLoginDispatch = token => {
    return {
        type: 'login',
        payload: token
    }
}

export const userLoginError = err => {
    return {
        type: 'error',
        payload: err
    }
}

export const userLoginAction = ({ email, password }) => (dispatch, getState) => {
    return axios.post('https://propulsion-blitz.herokuapp.com/api/login', { email, password})
    .then( response => {
        dispatch(userLoginDispatch(response.data.token))
        localStorage.setItem('token', response.data.token)
        return response;
    }).catch(err => {
        dispatch(userLoginError(err))
    })
}
