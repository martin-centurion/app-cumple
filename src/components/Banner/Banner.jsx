import React from 'react';
import './styles.css';
import { BiBeenHere } from 'react-icons/bi';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__content'>
            <div className='banner__content-img'>
                <img src="https://i.ibb.co/g4ZTCjS/pooro-300.jpg" alt="Martina Avila" />
            </div>
            <div className='banner__content-title'>
                <h1>Martina Ávila</h1>
                <p>En realidad me llamo la Pooro, me gustan las abejitas, quería compartirles mí invitación para festejar mi primer añito, prometo que será divertido y vamos a poder compartir un lindo recuerdo. Los quiero!</p>
                
            </div>
        </div>
        <div className='info'>
            <div className='info__content'>
                <div className='info__content-data'>
                    <h3>{<AiOutlineClockCircle />}</h3>
                    <p>Desde las 13 hasta 18h</p>
                </div>
                <div className='info__content-data'>
                    <h3>{<AiOutlineCalendar />}</h3>
                    <p>Domingo, 26 de Marzo</p>
                </div>
            </div>
            <div>
            <Link to="https://goo.gl/maps/FDDHMJ4jCPdmXoBB9">
                        <button> <span><BiBeenHere /></span> Ir a mi cumple</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner