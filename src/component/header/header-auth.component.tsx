import React from "react";
import {connect} from "react-redux";
import {UserModel} from "../../redux/reducers/user/user.model";
import {selectCurrentUser} from "../../redux/reducers/user/user.selector";
import {createStructuredSelector} from "reselect";
import HeaderProfile from "./header-profile.component";
import {Link} from "react-router-dom";
import './app-header.styles.scss'
type Props = {
    currentUser: UserModel
}

function HeaderAuth({currentUser}: Props): JSX.Element {
    console.log(currentUser);
    const truth: boolean = currentUser != null;
    console.log(truth);
    return (<>
            {currentUser ?
                (<HeaderProfile {...currentUser}/>)
                :
                (<Link className="sing-in-anchor" to='/auth'>Sign In</Link>)
            }
            </>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, null)(HeaderAuth);