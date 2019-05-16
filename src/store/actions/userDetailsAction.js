import Axios from "axios";

export const setUserDetailToState = UserDetails => {
  return {
    type: "getUserDetails",
    payload: UserDetails
  };
};

export const getUserDetails = userIdParams => (dispatch, getState) => {
  const token = getState().authorizationReducer.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  Axios.get(
    `https://propulsion-blitz.herokuapp.com/api/users/${userIdParams}`,
    config
  )
    .then(response => {
      dispatch(setUserDetailToState(response.data));
    })
    .catch(err => err);
};

