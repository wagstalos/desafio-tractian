
import { useState, useEffect } from "react";
import ai from '../../assets/ai.png';
import './header.css';
import Brand from '../../components/brand/Brand';
import Button from '../../components/button/Button';

export default function Header() {
    const [count, setCount] = useState(0);
    function cta() {
        setCount(count + 1);
        alert('clicou na demostração')
    }
    useEffect(() => {
        document.title = `Tractian ${count} `;
    });

    return (
        <div className="traction__header section__padding" id="home">
            <div className="traction__header-content center-mobile" >

                <h1 className="gradient__text center-mobile" data-aos="fade-down" data-aos-duration="1500">Monitoramento Online e Gestão de Ativos em um só lugar</h1>
                <p data-aos="fade-down" data-aos-duration="2000">Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da <strong>TRACTIAN.</strong></p>
                <div className="center-mobile" data-aos="zoom-in-up" data-aos-duration="1500">
                    <Button className="btn btn-primary mt-40" onClick={cta}> Demostração </Button>
                </div>

                <div className="traction__header-content__people" data-aos="zoom-in-up" data-aos-duration="2000">
                    <h4>Já é cliente? <strong>Acesse aqui</strong> .</h4>
                </div>
                <Brand />
            </div>

            <div className="traction__header-image" data-aos="fade-up" data-aos-duration="1500">
                <img src={ai} alt="imagem hero" />
            </div>

        </div >
    )
}
