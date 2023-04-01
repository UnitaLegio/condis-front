import {UserActionTypes} from "./user.type";
import {AnyAction} from "redux";
import {UserModel} from "./user.model";

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;