import { types } from "./types/types.js";

const initialState = {
  error: "",
  loginUser: "",
  dataImage: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginUser:
      return {
        ...state,
        loginUser: action.payload,
      };
    case types.error:
      return {
        ...state,
        error: action.payload,
      };

      case types.dataImage:
        return {
          ...state,
          dataImage: action.payload,
        }; 
    
    default:
      return state;
  }
};