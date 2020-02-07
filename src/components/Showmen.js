import React from 'react';
import homeBack from '../img/micro.jpg'
import kevin from '../img/kevin.jpg'
import issam from '../img/issam.jpg'
import ouahid from '../img/ouahid.jpg'
import antho from '../img/antho.jpg'

function Showmen() {
    return (
        <div className="shows">
            <h2>Showmen</h2>
            <br />
            <img className='showBack' src={homeBack} alt='backgroud' />
            <h5>At the Wild circus Marseille, you can find some funny guys to laught with, Here is some of the showmen you should see</h5>
            <br />
            <div className='show'>
                <img className='show' src={kevin} alt='Wilder pic' />
                <h4>Kevin is a fucking dick ! He can say everything that you can't ! So if someone do something wrong... ask Kevin ! And don't ask yourself questions if you hear him scream... it's normal</h4>
            </div>
            <div className='show'>
                <h4>Ouahid is a good father in real life but here in the Wild Circus he's a killer.. He shoot on everything that's move, try to aim on him you'll regrets, dont trust him.. he also can punch you behind your back </h4>
                <img className='show' src={ouahid} alt='Wilder pic' />
            </div>
            <div className='show'>
                <img className='show' src={issam} alt='Wilder pic' />
                <h4>Issam is an alien, he eat spicy as fuck, drink ginger and no one has already understand him when he talk our language, maybe you'll be the first one ! By the way he can drive fast cars, and want to become a rich guy</h4>
            </div>
            <div className='show'>
                <h4>Look and watch the great Anthony, with his incroyable body parts, he can hide the sun just with one finger.. his intelligence is incredible but his sense of style is totally absent, ask him his favorite color he will answer black or white </h4>
                <img className='show' src={antho} alt='Wilder pic' />
            </div>
        </div>
    );
}

export default Showmen;