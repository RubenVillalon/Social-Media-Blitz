import axios from "axios";

export const getAllUsers = user => {
  return {
    type: "getUsers",
    payload: user
  };
};

export const getUsers = () => (dispatch, getState) => {
    const token = getState().authorizationReducer.token;
      
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  
    axios
      .get("https://propulsion-blitz.herokuapp.com/api/users", config)
      .then(response => {
        dispatch(getAllUsers(response.data));
      })
      .catch(err => err);
  };
  