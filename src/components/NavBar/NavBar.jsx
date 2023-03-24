import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { CgBee } from 'react-icons/cg';

function NavBar() {


  return (
    <header className='header'>
            <div className='header__content'>
                <h1>{ <CgBee/> }</h1>
                <nav>
                    <Link to='/'>
                            <button>Inicio</button>
                    </Link>
                    
                    <Link to='/fotos'>
                            <button>Mis fotitos</button>
                    </Link>
                </nav>
            </div>
    </header>
  )
}

export default NavBar;