import { Dispatch } from "redux";
import API from "../api/api";

import { IInfo } from "../interfaces/interfaces";
import { IInfoState, IAction } from "./ducks.types";


export const GET_INFO = 'GET_INFO';

export const getInfo = (list: IInfo) => (dispatch: Dispatch): void => {
  dispatch({
    type: GET_INFO,
    list: list,
  })
}

export const updateUserInfo = () => (dispatch: Dispatch): void => {
  API.getInfo()
    .then((res: any) => {
      dispatch({
        type: GET_INFO,
        list: res.data,
      })
    })
    .catch((err: any) => {
      console.log(err)
    });
}

const initialState: IInfoState = {
  list: {} as IInfo,
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_INFO: {
      return {
        ...state,
        list: action.list as IInfo,
      }
    }

    default:
      return state;
  }
}