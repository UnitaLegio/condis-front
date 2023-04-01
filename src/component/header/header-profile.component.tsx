import React from "react";
import {UserModel} from "../../redux/reducers/user/user.model";

function HeaderProfile(currentUser: UserModel) {
    console.log("header profile component");
    return (<div>
        UserNameHere
            <img src={currentUser.avatarSrc}
                 alt="User's avatar"/>

    </div>);
}

export default HeaderProfile;