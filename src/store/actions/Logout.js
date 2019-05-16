const userLogOut = () => {
    localStorage.clear();
    return {
        type: 'logOut'
    }
}

export default userLogOut;