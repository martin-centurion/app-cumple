import React from 'react';
import './styles.css';
import { BiBeenHere } from 'react-icons/bi';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__content'>
            <div className='banner__content-img'>
                <img src="https://i.ibb.co/g4ZTCjS/pooro-300.jpg" alt="Martina Avila" />
            </div>
            <div className='banner__content-title'>
                <h1>Martina Avila</h1>
                <p>En realidad me llamo la Pooro, me gustan las abejitas, queria compartirle mí invitación para festejar mi primer añito, prometo que sera divertido y vamos a poder compartir un lindo recuerdo. Los quiero!</p>
                <button> <span><BiBeenHere /></span> Ir a mi cumple</button>
            </div>
        </div>
    </div>
  )
}

export default Banner