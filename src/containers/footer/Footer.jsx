import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p>Com a melhor tecnologia, nós transformamos um processo que hoje é demorado e complexo em uma experiência simples e inteligente.</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Sobre</h4>
                <p>Trabalhe conosco</p>
                <p>Conheça a tractian</p>
                <p>História de sucesso</p>
                <p>Politica de privacidade</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Produto</h4>
                <p>Sensor </p>
                <p>Plataforma</p>
                <p>Funcionalidades</p>
                <p>Planos</p>
            </div>

            <div className="gpt3__footer-links_div">
                <h4>Fale conosco</h4>
                <p>Contato</p>
                <p>© Tractian Tecnologia Ltda
                    CNPJ: 35.755.699/0001-84</p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2021 Wagner Paulo. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;