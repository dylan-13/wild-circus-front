import React from 'react'
import wcs from '../img/wcs.jpg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className='navbar'>
                <ul className="liste" >
                    <Link to='/'><li className="liste">Home</li></Link>
                    <Link to='/showmen'><li className="liste">Showmen</li></Link>
                    <img className='logo' src={wcs} alt='WCS logo' />
                    <Link to='/about'><li className="liste">About</li></Link>
                    <Link to='/discover'><li className="liste">Discover</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;

