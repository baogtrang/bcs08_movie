import { userLocalStorage } from "../../api/localService";
import { SET_INFO } from "../constant/user";
// rxreducer
const initialState = {
    info: userLocalStorage.get(),
}

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_INFO:
        state.info= payload;
        return { ...state}

    default:
        return state
  }
}
