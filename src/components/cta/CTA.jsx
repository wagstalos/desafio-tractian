import React from 'react';
import './cta.css';
import sensor from '../../assets/enviamos-o-sensor.png'

const CTA = () => (
    <div className="traction__cta">
        <div className="traction__cta-content">
            <h3>Nós enviamos os sensores</h3>
            <p>Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. <br /> Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.</p>
            <div className="traction__cta-btn">
                <button type="button">Pedir o meu</button>
            </div>
        </div>


        <div>
            <img src={sensor} alt="sensor" />
        </div>
    </div>
);

export default CTA;