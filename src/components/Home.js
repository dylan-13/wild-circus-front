import React from 'react';
import background from '../img/1.jpg'
import question from '../img/question.jpg'

function Header() {
    return (
        <div className="home">
            <img className='imgBack' src={background} alt="circus background" />
            <div className='intro'>
                <h1>Welcome to the Wild Circus Marseille of the september 2019 batch</h1>
            </div>
            <a id='question' ><img className='question' src={question} alt='question mark' /></a>
        </div>
    );
}

export default Header;