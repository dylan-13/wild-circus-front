import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
import crew from '../img/crew.jpg'
import kevin from '../img/kevin.jpg'
import issam from '../img/issam.jpg'
import ouahid from '../img/ouahid.jpg'
import antho from '../img/antho.jpg'
import homeBack from '../img/micro.jpg'
import aboutUsBack from '../img/smoke.jpg'
import linkedIn from '../img/linkedIn.png'


function HomePage() {

    // setStudentsData pour set data du get et studentsData pour enregistrer ses données
    const [studentsData, setStudentsData] = useState([]);

    // récupére la donnée du back connecté et envoi celle-ci dans setStudentsData
    const getStudents = async () => {
        await axios.get('https://wild-circus.herokuapp.com/students')
            .then(response => setStudentsData(response.data))
            .catch((err) => console.log(err))
    }

    // cycle de vie qui appel getStudents pour set la donnée et pouvoir l'appeler dans le return
    useEffect(() => { getStudents() }, [])

    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../../public/students/', false, /\.(png|jpe?g|svg)$/));

    const carouselItems = studentsData.map(x => (<div className='students'>
        <div className='linkedin'>
            <a href={x.linkedIn} style={{ width: 'auto' }} ><img style={{ width: '2vw', height: 'auto' }} className='linkedIn' src={linkedIn} alt='linkedin logo' /></a>
        </div>
        <div className='card1' ><h6 className='name'>{x.firstName} {x.lastName}</h6>
            <img className='students' src={images[x.id]} alt='students pics' />
            <h6>{x.show}</h6>
        </div>
    </div>))

    return (
        <div className="homepage">
            <div id='shows' className="shows">
                <h2>Showmen</h2>
                <br />
                <img style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1' }} src={homeBack} alt='backgroud' />
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
            <div id='aboutUs' className='aboutUs' >
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
            <div id='discover' className='discover'>
                <h2>Discover</h2>
                <br />
                <div className='cardsRow'>
                    {carouselItems.slice(0, 5)}
                </div>
                <div className='cardsRow'>
                    {carouselItems.slice(5, 10)}
                </div>
                <div className='cardsRow'>
                    {carouselItems.slice(10)}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
