const setToken = (token : string) : void => {
	localStorage.setItem('token', token);
};
const getToken = () : void => {
	localStorage.getItem('token');
};

export { setToken, getToken };
