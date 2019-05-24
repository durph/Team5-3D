import React from 'react';
import search from '../../assets/Icons/SVG/Icon-search.svg';
import './Navigation.scss';

class Navigation extends React.Component {

render() {
    return (
        <main className="nav">
            <ul className="nav__link">
                <ul className="nav__link__1">
                    <li className="nav__link__1--left1">TED</li>
                    <li className="nav__link__1--left2">Ideas worth spreading</li>
                    <li className="nav__link__2--right">WATCH</li>
                    <li className="nav__link__2--right">DISCOVER</li>
                    <li className="nav__link__2--right">ATTEND</li>
                    <li className="nav__link__2--right">PARTICIPATE</li>
                    <li className="nav__link__2--right">ABOUT</li>
                    <img className="nav__link__search" src={search} alt="searchicon"/>
                </ul>
            </ul>
        </main>
    )

    }
   
}

export default Navigation;
