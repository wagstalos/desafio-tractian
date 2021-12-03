import React from 'react';
import './whatTractian.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import coleSensor from '../../assets/cole-o-sensor.png';
import featuresHeader from '../../assets/features-header.png';
import automoacoesMetricas from '../../assets/automacoes-e-metricas.png';
import 'react-tabs/style/react-tabs.css';

const WhatTractian = () => {
    return (
        <div className="traction__whatTractian section__padding">
            <div>
                <h4>MANUTENÇÃO PREDITIVA DESCOMPLICADA</h4>
                <h2>Mantenha a sua equipe e seus ativos com o <strong>melhor desempenho</strong> </h2>
            </div>
            <div className="">
                {/* <div className="traction__whatTractian-column">
                    <img src={sensor} />
                </div> */}
                <div className="">
                    <Tabs>
                        <TabList>
                            <Tab>Sensor Plug & Play</Tab>
                            <Tab>Monitoramento Online</Tab>
                            <Tab>Gestão de Ativos</Tab>
                        </TabList>

                        <TabPanel>
                            <h2 className="gradient__text mt-40">Tecnologia IoT avançada para conectar seus ativos</h2>
                            <p>Nossos sensores enviam dados do seu equipamento através de rede 3g/4g. Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.</p>
                            <img src={coleSensor} alt="ecnologia IoT avançada para conectar seus ativos" />
                        </TabPanel>
                        <TabPanel>
                            <h2 className="gradient__text mt-40">Plataforma que trabalha por você</h2>
                            <p>Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.</p>
                            <img src={featuresHeader} alt="Plataforma que trabalha por você" />
                        </TabPanel>

                        <TabPanel>
                            <h2 className="gradient__text mt-40">O Software de manutenção dos seus sonhos</h2>
                            <p>Use procedimentos online para organizar checklists e inspeções. Centralize a rotina do seu time e potencialize as atividades de cada colaborador através das automações e métricas.</p>
                            <img src={automoacoesMetricas} alt="coletor sensor" />
                        </TabPanel>
                    </Tabs>
                    <button className="">Agende uma demostração</button>
                </div>
            </div>

        </div>
    )
}

export default WhatTractian
