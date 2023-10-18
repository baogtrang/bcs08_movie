import { userLocalStorage } from "../../api/localService";
import { SET_INFO } from "../constant/user";

//rxreducer
// initialState chạy khi load trang
const initialState = {
    info: userLocalStorage.get(),
}

let userReducer=(state=initialState,{ type, payload }) => {
    switch (type) {
        case SET_INFO:
            state.info=payload;
            return { ...state };
        default:
            return state
    }
}

export default userReducer;