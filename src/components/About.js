import React from 'react';
import aboutUsBack from '../img/smoke.jpg'
import crew from '../img/crew.jpg'

function About() {
return (
<div className='aboutUs' >
    <img style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1' }} src={aboutUsBack} alt='backgroud' />
    <h2>About</h2>
    <br />
    <img className='crew' src={crew} alt='wild circus crew' />
    <br />
    <h3 className='text'>The Marseille Wild Code School bash of september 2019 is composed with 15 JavaScript students and 15 Java students.
    <br />
    We are all exclusive and special that's make the show incredible..
    Our costumes are handmade and animals are trained by us.
    <br />
    That's all we do. Wild Circus is our job, our life, our love.
    Come to us and be a part of the magic.
    </h3>
</div>
);
}

export default About;