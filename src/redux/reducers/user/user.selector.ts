import {createSelector} from "reselect";
import {UserModel} from "./user.model";
//TODO: Create user type
const selectUser = (state: { currentUser: UserModel; }): UserModel => state.currentUser;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user: UserModel) => user
);