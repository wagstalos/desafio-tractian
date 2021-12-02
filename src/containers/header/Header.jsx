import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Monitoramento Online e Gestão de Ativos em um só lugar</h1>
            <p>Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.</p>

            <div className="center-mobile">
                <button className="btn btn-primary" type="button">Demostração</button>
            </div>

            <div className="gpt3__header-content__people">
                {/* <img src={people} /> */}
                <h4>Já é cliente? <strong>Acesse aqui</strong> .</h4>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} />
        </div>
    </div>
);

export default Header;