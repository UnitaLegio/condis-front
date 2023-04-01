import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// import '../../assets/styles/global.styles.scss'
import './app-header.styles.scss'
import logo from '../../assets/images/ul-wormball.svg'
import HeaderAuth from "./header-auth.component";

function AppHeader() {
    const location = useLocation();
    const shouldBeShown = location.pathname !== '/auth'
    return (<header className={`header-area header-sticky${shouldBeShown ? '' : ' display-none'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="#" className="logo">
                                <img src={logo} alt="ul logo"/>
                                <span className="logo-styled-text header-logo-text">
                                        UnitaLegio
                                    </span>
                            </a>
                            <div className="search-input">
                                <form id="search" action="#">
                                    <input type="text"
                                           placeholder="Type Something"
                                           id='searchText'
                                           name="searchKeyword"
                                        /*onKeyPress="handle"*//>
                                    <i className="fa fa-search"></i>
                                </form>
                            </div>
                            <ul className="nav">
                                <li><Link className='option' to='/'>Home</Link></li>
                                <li><Link className='option' to='/projects'>Projects</Link></li>
                                <li><Link className='option' to='/about'>About</Link></li>
                                <li><Link className='option' to='/contact'>Contact</Link></li>
                                <li>
                                    <HeaderAuth/>
                                </li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;