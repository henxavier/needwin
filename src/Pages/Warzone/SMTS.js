import React, {useState} from 'react';
import { Col, Container, Row, Card, Modal, Button } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function SMTS(){
    const [mac10, mac10Show] = useState(false);

    return(<>

    <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AUG</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AUG.PNG" alt="AUG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Cano Estendido 407 mm<br/>
                            <strong>LENTE:</strong> Mira Refletora de Operador<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores NATO 5.56 de 30 Projéteis<br/>
                            <strong>CORONHA:</strong> Apoio de rosto Forge TAC CQB<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">P90</Card.Title>
                        <Card.Img variant="top" src="./img-armas/P90.PNG" alt="P90" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>LENTE:</strong> Mira em anel FSS<br/>
                            <strong>ACOPLAMENTO:</strong> Fita Aderente Pontilhada<br/>
                            <strong>CABO:</strong> Fita Aderente Pontilhada<br/>
                            <strong>CORONHA:</strong> Apoio de rosto Forge TAC CQB<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">MP5</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MP5.PNG" alt="MP5" />
                            <Card.Text>
                            <strong>CANO:</strong> Supressor integral mololitico<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 45 Projéteis<br/>
                            <strong>CABO:</strong> Fita Aderente Granulada<br/>
                            <strong>ACLOPAMENTO:</strong> Empunhadura de Mercenário<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">UZI</Card.Title>
                        <Card.Img variant="top" src="./img-armas/UZI.PNG" alt="UZI" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>ACOMPLAMENTO:</strong> Empunhadura de Mercenario<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores .41 AE de 32 Projéteis<br/>
                            <strong>VANTAGEM:</strong> Mãos Leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">PP19 BIZON</Card.Title>
                        <Card.Img variant="top" src="./img-armas/PP19 BIZON.PNG" alt="PP19 Bizon" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> Aço 8,7"<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>LENTE:</strong> Minirrefletora Militar<br/>
                            <strong>CABO:</strong> Fita Aderente Granulada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">MP7</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MP7.PNG" alt="MP7" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 60 Projéteis<br/>
                            <strong>CORONHA:</strong> Sem coronha<br/>
                            <strong>VANTAGEM:</strong> Mâos Leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">STRIKER 45</Card.Title>
                        <Card.Img variant="top" src="./img-armas/STRIKER 45.PNG" alt="Striker 45" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>LENTE:</strong> Mira Refletora Monocular<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 45 Projéteis<br/>
                            <strong>CABO:</strong> Polímero da série FTAC 60<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">FENNEC</Card.Title>
                        <Card.Img variant="top" src="./img-armas/FENNEC.PNG" alt="Fennec" />
                            <Card.Text>
                            <strong>CANO:</strong> ZLR 18" Deadfall<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Mercenário<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores Duplos de 40 Projéteis<br/>
                            <strong>CABO:</strong> Fita Aderente Granulada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">ISO</Card.Title>
                        <Card.Img variant="top" src="./img-armas/ISO.PNG" alt="ISO" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> FSS Revolução<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Ranger<br/>
                            <strong>MUNIÇÃO:</strong> Tambores de 50 Projéteis<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">MP5 (CW)</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MP5 CW.png" alt="MP5 (Cold War)" />
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
                            <Card.Title className="titulo-arma">MILANO 821</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MILANO821.png" alt="Milano 821" />
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
                            <Card.Title className="titulo-arma">AK-74U</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AK-74U.png" alt="AK-74u" />
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
                            <Card.Title className="titulo-arma">KSP 45</Card.Title>
                        <Card.Img variant="top" src="./img-armas/KSP45.png" alt="KSP 45" />
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
                            <Card.Title className="titulo-arma">BULLFROG</Card.Title>
                        <Card.Img variant="top" src="./img-armas/BULLFROG.png" alt="Bullfrog" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor GRU<br/>
                            <strong>CANO:</strong> Força-Tarefa 7,4"<br/>
                            <strong>LASER:</strong> Mira Laser GRU 5mw<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Spetsnaz<br/>
                            <strong>CABO:</strong> Empunhadura de Campo Spetsnaz<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">MAC-10</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MAC10.png" alt="MAC-10" />
                            <Card.Text>
                            <strong>BOCA:</strong> Freio de Boca 9<br/>
                            <strong>CANO:</strong> Força-Tarefa 5,9"<br/>
                            <strong>ACOMPLAMENTO:</strong> Empunhadura de Patrulha<br/>
                            <strong>MUNIÇÃO:</strong> Carregador Rápido de Rajada 53 prj<br/>
                            <strong>CORONHA:</strong> Coronha de Arame<br/>
                            </Card.Text>

                            <Button onClick={() => mac10Show(true)}>Assista o Video</Button>{' '}
                            <Modal className="m-0" show={mac10} onHide={() => mac10Show(false)} centered>
                                <Modal.Body className="video-base"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/YSWj5W6ZFX4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    <Footer />

    </>);
};

export default SMTS