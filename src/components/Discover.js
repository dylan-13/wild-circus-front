import React, { useState, useEffect } from 'react'
import axios from 'axios'
import linkedIn from '../img/linkedIn.png'


function Discover() {
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
            <a href={x.linkedIn} style={{ width: 'auto' }} ><img style={{ width: '2vw', height: 'auto', display: 'flex' }} className='linkedIn' src={linkedIn} alt='linkedin logo' /></a>
        </div>
        <div className='card1' ><h6 className='name'>{x.firstName} {x.lastName}</h6>
            <img className='students' src={images[x.id]} alt='students pics' />
            <h6>{x.show}</h6>
        </div>
    </div>))

    return (
        <div className='discover'>
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
        </div>
    );
}

export default Discover;