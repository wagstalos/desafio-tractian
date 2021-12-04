import React from 'react';
import './products.css';
import iconMonitor from "../../assets/icon-monitor.svg"
import iconManutencao from "../../assets/icon-maintence-online.svg"
import iconManutencaoPump from "../../assets/icon-maintence-pump.svg"
import iconHorimenter from "../../assets/icon-maintence-horimeter.svg"
const Products = () => {
    return (
        <div className="traction__products section__padding" id="tractian">
            <h4>SOMOS A TRACTIAN</h4>
            <h2>Por que escolher a <b> Tractian?</b></h2>
            <div className="traction__products flex">
                <div className="card mt-10" data-aos="flip-left">
                    <img src={iconMonitor} alt="icone Manutenção Preditiva" />
                    <h3 className="gradient__text">Manutenção Preditiva</h3>
                    <p>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                </div>
                <div className="card mt-10" data-aos="flip-left">
                    <img src={iconManutencao} alt="Monitoramento Online" />
                    <h3 className="gradient__text">Monitoramento Online</h3>
                    <p>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                </div>
                <div className="card mt-10" data-aos="flip-left">
                    <img src={iconManutencaoPump} alt=" iconManutencaoPump" />
                    <h3 className="gradient__text">Setup Instantâneo</h3>
                    <p>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                </div>
                <div className="card mt-10" data-aos="flip-left">
                    <img src={iconHorimenter} alt="iconHorimenter" />
                    <h3 className="gradient__text">CMMS Integrado</h3>
                    <p>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                </div>
            </div>

        </div>
    )
}

export default Products
