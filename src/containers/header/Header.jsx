import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';
import Brand from '../../components/brand/Brand';
import Button from '../../components/button/Button';

const Header = () => (
    <div className="traction__header section__padding" id="home">
        <div className="traction__header-content center-mobile">
            <h1 className="gradient__text center-mobile">Monitoramento Online e Gestão de Ativos em um só lugar</h1>
            <p>Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da <strong>TRACTIAN.</strong></p>

            <div className="center-mobile">
                <Button className="btn btn-primary mt-40"> Demostração </Button>
            </div>

            <div className="traction__header-content__people">
                <h4>Já é cliente? <strong>Acesse aqui</strong> .</h4>
            </div>
            <Brand />
        </div>

        <div className="traction__header-image">
            <img src={ai} alt="imagem hero" />
        </div>

    </div>
);

export default Header;