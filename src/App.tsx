import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from "./redux/reducers/user/user.selector";
import './assets/styles/app.styles.scss'
import Header from "./component/header/app-header.component";
import HomePage from "./pages/home/home.page";
import AboutPage from "./pages/about/about.page";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/showcase"/>
                    <Route path="/team"/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contacts"/>
                </Routes>
            </main>
        </div>
    );
}

/*type Props = {
    currentUser: UserModel
}*/

/*function App({currentUser}: Props): JSX.Element {
    return (
        <div className="App">
            <AppHeader currentPage={window.location.pathname}/>
            <div className='page-content-container'>
                <DefaultContainer>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<HomePage/>}/>
                            <Route path='auth' element={<AuthPage/>}/>
                        </Route>
                    </Routes>
                </DefaultContainer>
            </div>
        </div>
    );
}*/

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
/*const mapDispatchToProps = dispatch => ({

});*/
export default connect(mapStateToProps, null)(App);
