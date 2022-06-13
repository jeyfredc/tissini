


import {types}  from '../../reducers/types/types';
import {peticion, peticionGET} from '../../../helpers/fetch'

  
export const registerUser = (data) => {
    // console.log(data);
  return async (dispatch) => {
    const endpoint = 'api/v3/login/client';
    const resp = await peticion(endpoint, "POST", data );
    const body = await resp.json();
       if (body.customer) {
      dispatch({
        type: types.loginUser,
        payload: body.customer.id,
      });
    }else {
      dispatch({
        type: types.error,
        payload: "error",
      });
    }
    }
  };

export const getClothes = (userId) => {
  return async (dispatch) => {
    const endpoint = `api/v3/stock/multivendor/${userId}`;
    const resp = await peticionGET(endpoint, "GET");
    const body = await resp.json();
    dispatch({
      type: types.dataImage,
      payload: body,
    });
  };
};




