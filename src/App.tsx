import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppHeader from "./component/header/app-header.component";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/home.page";
import AuthPage from "./pages/auth/auth.page";
import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from "./redux/reducers/user/user.selector";
import {UserModel} from "./redux/reducers/user/user.model";

type Props = {
    currentUser: UserModel
}

function App({currentUser}: Props): JSX.Element {
    return (
            <div className="App">
                <AppHeader/>
{                <Routes>
                    <Route path='/'>
                        <Route index element={<HomePage/>}/>
                        <Route path='auth' element={<AuthPage/>}/>
                    </Route>
                </Routes>}
            </div>
    );
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
/*const mapDispatchToProps = dispatch => ({

});*/
export default connect(mapStateToProps, null)(App);
