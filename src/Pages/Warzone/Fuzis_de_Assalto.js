import React, {useState} from 'react';
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';
import "../../App.css";

function Assalt(){
    const [kilo, kiloShow] = useState(false);
    const [oden, odenShow] = useState(false);
    const [faac, faacShow] = useState(false)

    return(<>

    <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">KILO 141</Card.Title>
                        <Card.Img variant="top" src="./img-armas/kilo.png" alt="Kilo 141" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Singuard Arms 19.8″ Prowler<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 60 Projéteis<br/>
                            <strong>LENTE:</strong> Minirrefletora<br/>
                            </Card.Text>


                            <Button onClick={() => kiloShow(true)}>Assista o Video</Button>{' '}
                            <Modal className="m-0" show={kilo} onHide={() => kiloShow(false)} centered>
                                <Modal.Body className="video-base"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/z9owtYKX0PM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">FAL</Card.Title>
                        <Card.Img variant="top" src="./img-armas/FAL.PNG" alt="FAL" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Atirador com XRK<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Ranger<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 24 Projéteis<br/>
                            <strong>LENTE:</strong> Hibrida Integral<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">M4A1</Card.Title>
                        <Card.Img variant="top" src="./img-armas/M4A1.png" alt="M4A1" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Coronha M16 Granadeira<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 60 Projéteis<br/>
                            <strong>LENTE:</strong> Hibrida Integral<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">FR 5.56</Card.Title>
                        <Card.Img variant="top" src="./img-armas/FR 556.PNG" alt="FR 5.56" />
                            <Card.Text>
                            <strong>BOCA:</strong> Compensador<br/>
                            <strong>CANO:</strong> FR 15,9" comando<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Tática<br/>
                            <strong>CORONHA:</strong> Oco Ultraleve FR<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">ODEN</Card.Title>
                        <Card.Img variant="top" src="./img-armas/oden.png" alt="Oden" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor Colosso<br/>
                            <strong>CANO:</strong> Oden 810 mm de fábrica<br/>
                            <strong>LENTE:</strong> Hibrida Integral<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 30 projéteis<br/>
                            </Card.Text>


                            <Button onClick={() => odenShow(true)}>Assista o Video</Button>
                            <Modal show={oden} onHide={() => odenShow(false)} centered>
                                <Modal.Body  className="video-base"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/jV8WMcXcsBo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">M13</Card.Title>
                        <Card.Img variant="top" src="./img-armas/M13.png" alt="M13" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Forge TAC 20,0" LB<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 60 Projéteis<br/>
                            <strong>LENTE:</strong> Híbrida Integral<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">FN SCAR 17</Card.Title>
                        <Card.Img variant="top" src="./img-armas/FN SCAR 17.PNG" alt="FN Scar 17" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Forge TAC 20,0" LB<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 30 Projéteis<br/>
                            <strong>LENTE:</strong> Mira Holográfica de Combate<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AK-47</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AK-47.PNG" alt="AK-47" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Romeno 23,0"<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 40 Projéteis<br/>
                            <strong>LENTE:</strong> Hibrida Integral<br/>
                            <strong>CORONHA:</strong> Coronha de Esqueleto<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">RAM-7</Card.Title>
                        <Card.Img variant="top" src="./img-armas/RAM-7.PNG" alt="RAM-7" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Ranger FSS<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 50 Projéteis<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">GRAU 5.56</Card.Title>
                        <Card.Img variant="top" src="./img-armas/GRAU 556.png" alt="Grau 5.56" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> FSS 20.8" Nexus<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 60 Projéteis<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">CR-56 AMAX</Card.Title>
                        <Card.Img variant="top" src="./img-armas/CR-56 AMAX.PNG" alt="CR-56 AMAX" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> XRK Zodiac S440<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 45 Projéteis<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AN-94</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AN-94.PNG" alt="AN-94" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> AN-94 X-438 mm de fábrica<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 60 Projéteis<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AS VAL</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AS VAL.png" alt="AS VAL" />
                            <Card.Text>
                            <strong>CANO:</strong> STOV SOF<br/>
                            <strong>LASER:</strong> Laser tático<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Mercenario<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 30 Projéteis<br/>
                            <strong>CABO:</strong> Fita aderente pontilhada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">XM4 (CW)</Card.Title>
                        <Card.Img variant="top" src="./img-armas/XM4.png" alt="XM4 (Cold War)" />
                            <Card.Text>
                            <strong>BOCA:</strong> Freio de Boca 5.56<br/>
                            <strong>CANO:</strong> Pesado Reforçado 13,5"<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Agente de campo<br/>
                            <strong>MUNIÇÃO:</strong> Carregador Rápido de Rajada 50 prj<br/>
                            <strong>LENTE:</strong> Visiontech 2x<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AK47 (CW)</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AK47 CW.png" alt="AK47 (Cold War)" />
                            <Card.Text>
                            <strong>CANO:</strong> Eliminador 18,2"<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Spetsnaz<br/>
                            <strong>ALÇA:</strong> Tiras Elásticas GRU<br/>
                            <strong>LENTE:</strong> Axial Arms 3,0x<br/>
                            <strong>CORONHA:</strong> Fita aderente pontilhada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">KRIG 6</Card.Title>
                        <Card.Img variant="top" src="./img-armas/KRIG6.png" alt="Krig 6" />
                            <Card.Text>
                            <strong>CANO:</strong> INDEFINIDO<br/>
                            <strong>ACOPLAMENTO:</strong> INDEFINIDO<br/>
                            <strong>ALÇA:</strong> INDEFINIDO<br/>
                            <strong>LENTE:</strong> INDEFINIDO<br/>
                            <strong>CORONHA:</strong> INDEFINIDO<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">QBZ-83</Card.Title>
                        <Card.Img variant="top" src="./img-armas/QBZ83.png" alt="QBZ-83" />
                            <Card.Text>
                            <strong>CANO:</strong> INDEFINIDO<br/>
                            <strong>ACOPLAMENTO:</strong> INDEFINIDO<br/>
                            <strong>ALÇA:</strong> INDEFINIDO<br/>
                            <strong>LENTE:</strong> INDEFINIDO<br/>
                            <strong>CORONHA:</strong> INDEFINIDO<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">FAAC 1</Card.Title>
                        <Card.Img variant="top" src="./img-armas/FAAC1.png" alt="FAAC 1" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor da Agência<br/>
                            <strong>CANO:</strong> Força-Tarefa 19,5"<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Brutal<br/>
                            <strong>MUNIÇÃO:</strong> Carregador Rapido Rajada 55 Prj<br/>
                            <strong>CORONHA:</strong> Coronha Combatente<br/>
                            </Card.Text>

                            <Button onClick={() => faacShow(true)}>Assista o Video</Button>{' '}
                            <Modal className="m-0" show={faac} onHide={() => faacShow(false)} centered>
                                <Modal.Body className="video-base"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/a7n53vH2nMY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">GROZA</Card.Title>
                        <Card.Img variant="top" src="./img-armas/GROZA.png" alt="GROZA" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor GRU<br/>
                            <strong>CANO:</strong> CMV Militar 16.5<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Spetsnaz<br/>
                            <strong>LENTE:</strong> Microflex LED<br/>
                            <strong>MUNIÇÃO:</strong> Carregador Rapido VDV 50 Prj<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    <Footer />

    </>);
};

export default Assalt