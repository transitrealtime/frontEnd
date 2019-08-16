import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
const isEmpty = require('is-empty');
const axios = require('axios');
const SET_CURRENT_USER = "SET_CURRENT_USER";
const USER_LOADING = "USER_LOADING";

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

// Set logged in user
const setCurrentUser = decoded => {
    return {
    type: SET_CURRENT_USER,
    payload: decoded
    };
};

// Loading user
const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

//Register user
export const registerUserThunk = (userData, history) => async(dispatch) => {
    await axios.post('https://mta-real-time.herokuapp.com/user', userData)
    .then(res=>history.push('/'))
    .catch(err =>
        console.log(err)
    );
};

// Log in user
export const loginUserThunk = userData => async(dispatch) => {
    try {
        const res = await axios.post('mta-real-time.herokuapp.com/user/login', userData);
        if(res) {
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        }
    } catch(err) {
        console.log(err);
    }
}

// Log user out
export const logoutUserThunk = () => async(dispatch) => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
     // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user:action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state;
    }
}