export const checkIfAuthenticated = token => {
    if (!token) {
        return false;
    }
    return true;
};
