export const likePost = postId => (dispatch, getState) => {
    const token = getState().authorizationReducer.token;
    console.log(postId)
   
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    });
  
    const config = {
      method: "POST",
      headers,
    };
  
    return fetch(`https://propulsion-blitz.herokuapp.com/api/blitzs/${postId}/like`, config)
      .then(response => {
        console.log(response.status, 'you liked/unliked the post!');
        return response.json()
      }).then(data => console.log(data))
      .catch(err => err);
  };