import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "../consts/index";

const token = localStorage.getItem("token");

const initialState = {
  username: "",
  user_id: "",
  error: "",
  isLoading: "",
  isRegistered: false,
  isLoggedIn: token || false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        user_id: action.payload.user_id,
        isLoading: false,
        isRegistered: true,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOGIN_USER_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        username: action.payload.username,
        user_id: action.payload.user_id,
        isLoading: false,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
