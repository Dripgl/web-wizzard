import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import "./Timeline.css"
import 'react-vertical-timeline-component/style.min.css';


function ProcessLeft() {
    return (
        <div className="container">
            <VerticalTimeline className="container-timeline">
                <VerticalTimelineElement
                    className="timeline"
                    contentStyle={{ background: '#008f39', color: '#000000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                    iconStyle={{ background: '#000000', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Concepimento del Progetto</h3>
                    <p>
                        Durante questa fase, collaboriamo insieme per dare vita al tuo sogno, trasformando le tue idee in un progetto tangibile e coinvolgente utilizzando strumenti avanzati come Figma.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#000000', color: '#fff' }}
                >
                    <div className="icon-container">
                        {/* <FontAwesomeIcon icon={faChartLine} /> */}
                    </div>
                    <h3 className="vertical-timeline-element-title">Pianificazione Strategica</h3>
                    <p>
                        Dopo aver definito il concept, lavoriamo insieme per creare una strategia di marketing mirata e efficace. Senza una strategia ben definita, anche il miglior progetto rischia di perdersi nel caos del web.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#000000', color: '#fff' }}
                >
                    <div className="icon-container">
                        {/* <FontAwesomeIcon icon={faChartLine} /> */}
                    </div>
                    <h3 className="vertical-timeline-element-title">Esecuzione del Piano</h3>
                    <p>
                        Una volta pianificato tutto, passiamo all'azione! Dalla gestione dei social media alla creazione di contenuti coinvolgenti e lo sviluppo dei software necessari, ti guideremo attraverso ogni fase del processo. Sarai sempre supportato dalla nostra equipe esperta.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#000000', color: '#fff' }}
                >
                    <div className="icon-container">
                        {/* <FontAwesomeIcon icon={faChartLine} /> */}
                    </div>
                    <h3 className="vertical-timeline-element-title">Presentazione della Demo</h3>
                    <p>
                        Qui è il momento di mostrare al mondo ciò che abbiamo creato insieme. Pubblicheremo una demo del progetto, che sia un'app, un sito web o altro, per farti vedere il potenziale del tuo lavoro.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#000000', color: '#fff' }}
                >
                    <div className="icon-container">
                        {/* <FontAwesomeIcon icon={faChartLine} /> */}
                    </div>
                    <h3 className="vertical-timeline-element-title">Conclusione e Celebrazione</h3>
                    <p>
                        Finalmente, il tuo progetto è completo! È arrivato il momento di goderti appieno il frutto del tuo lavoro. Siamo fieri di averti accompagnato lungo questo percorso e siamo sicuri che il risultato finale ti sorprenderà.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>

    )
}

export default ProcessLeft;
