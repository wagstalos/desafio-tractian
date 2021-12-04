import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import Button from '../../components/button/Button';

const Navbar = () => {
    const [toggleMenu, setToogleMenu] = useState(false);
    return (
        <div className="traction__navbar">
            <div className="traction__navbar-links">
                <div className="traction__navbar-links_logo">
                    <img src={logo} alt="logo Tractian" />
                </div>
                <div className="traction__navbar-links_container">
                    <p><a href="#features">Conheça o produto</a></p>
                    <p><a href="#wtraction">Manutençao preditiva</a></p>
                    <p><a href="#tractian">Tractian</a></p>
                    <p><a href="#blog">Blog</a></p>
                </div>
            </div>
            <div className="traction__navbar-sign">
                {/* <p>Sign in</p> */}
                <Button className="btn btn-primary"> Demostração </Button>
            </div>
            <div className="traction__navbar-menu" >
                {toggleMenu
                    ? <RiCloseLine color="#fff" onSize={27} onClick={() => setToogleMenu(false)} />
                    : <RiMenu3Line color="#fff" onSize={27} onClick={() => setToogleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="traction__navbar-menu_container scale-up-center" data-aos="zoom-in">
                        <div className="traction__navbar-menu_container-links">
                            <p><a href="#features">Conheça o produto</a></p>
                            <p><a href="#wtraction">Manutençao preditiva</a></p>
                            <p><a href="#tractian">Tractian</a></p>
                            <p><a href="#blog">Blog</a></p>
                        </div>
                        <div className="traction__navbar-menu_container-links-sign">
                            {/* <p>Sign in</p> */}
                            <Button className="btn btn-primary"> Demostração </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar