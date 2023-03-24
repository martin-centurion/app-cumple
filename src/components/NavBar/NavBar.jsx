import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className='header'>
            <div className='header__content'>
                <h1>Logo</h1>
                <nav>
                    <Link to='/'>
                            <button>Inicio</button>
                    </Link>
                    
                    <button>Mis fotitos</button>
                </nav>
            </div>
    </header>
  )
}

export default NavBar;