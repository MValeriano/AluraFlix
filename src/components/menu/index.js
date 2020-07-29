import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
             <img className="Logo" src={Logo} alt="AluraFlix Logo"/>
            </a>

            <ButtonLink href="/" className="ButtonLink">  Novo vídeo </ButtonLink>
        </nav>
    )
}

export default Menu;