export const followUser = userId => (dispatch, getState) => {
    const token = getState().authorizationReducer.token;
   

    const headers = new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    });
  
    const config = {
      method: "POST",
      headers,
    };
  
    return fetch(`https://propulsion-blitz.herokuapp.com/api/users/${userId}/follow`, config)
      .then(response => {
        console.log(response.status, 'you are following/unfollowing the user');
      })
      .catch(err => err);
  };