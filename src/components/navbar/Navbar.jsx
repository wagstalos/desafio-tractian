import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Navbar = () => {
    const [toggleMenu, setToogleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo Tractian" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Conheça o produto</a></p>
                    <p><a href="#wgpt3">Sobre nós</a></p>
                    <p><a href="#possibility">Materias gratuitos</a></p>
                    <p><a href="#features">Blog</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                {/* <p>Sign in</p> */}
                <button type="button">Demostração</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" onSize={27} onClick={() => setToogleMenu(false)} />
                    : <RiMenu3Line color="#fff" onSize={27} onClick={() => setToogleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Conheça o produto</a></p>
                            <p><a href="#wgpt3">Sobre nós</a></p>
                            <p><a href="#possibility">Materias gratuitos</a></p>
                            <p><a href="#features">Blog</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            {/* <p>Sign in</p> */}
                            <button type="button">Demostração</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar