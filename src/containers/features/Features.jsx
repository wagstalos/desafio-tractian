import React from 'react';
import './features.css';
import cmms from '../../assets/sensor-plataforma-celular-tablet.png'
import logo from '../../assets/logo.svg';
import Button from '../../components/button/Button';

const Features = () => {
    return (
        <div className="traction__features section__padding" id="features">
            <div className="flex">
                <div className="card" data-aos="flip-left">
                    <img className="card-img-top" src={cmms} alt="TracOS" />
                    <img className="logo" src={logo} alt="loggo tractian" />
                    <h2>TracOS</h2>
                    <p className="text-light lead mt-40">
                        O CMMS revolucionário para planejar, acompanhar métricas e conectar-se com sua equipe.
                    </p>
                    <Button className="btn btn-primary mt-40"> Conheça TracOS </Button>

                </div>
                <div className="card" data-aos="flip-left">
                    <img className="card-img-top" src={cmms} alt="Smart Trac" />
                    <img className="logo" src={logo} alt="logo tractian" />
                    <h2> Smart Trac</h2>
                    <p className="text-light lead mt-40">
                        O sistema preditivo mais completo do mercado. Mais visibilidade, segurança e controle de forma simples e inteligente.
                    </p>
                    <Button className="btn btn-primary mt-40"> Conheça o Smart Trac </Button>

                </div>
            </div>
        </div>
    )
}

export default Features
