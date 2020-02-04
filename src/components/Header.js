import React from 'react';
import wcs from '../img/wcs.jpg'
import background from '../img/1.jpg'
import question from '../img/question.jpg'

function Header() {
    return (
        <div id='home' className="header">
            <img className='imgBack' src={background} alt="circus background" />
            <div className='navbar'>
                <ul className="liste" >
                    <li className="liste">
                        <a href="#home">Home</a>
                    </li>
                    <li className="liste">
                        <a href="#shows">Showmen</a>
                    </li>

                    <img className='logo' src={wcs} alt='WCS logo' />

                    <li className="liste">
                        <a href="#aboutUs">About</a>
                    </li>
                    <li className="liste">
                        <a href="#discover">Discover</a>
                    </li>
                </ul>
            </div>
            <div className='intro'>
                <h1>Welcome to the Wild Circus Marseille of the september 2019 batch</h1>
            </div>
            <a href='null' id='question' ><img className='question' src={question} alt='question mark' /></a>
        </div>
    );
}

export default Header;