import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function MTS(){
    return(<>

    <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">PKM</Card.Title>
                        <Card.Img variant="top" src="./img-armas/PKM.PNG" alt="PKM" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> Cano Estendido 26,9"<br/>
                            <strong>LENTE:</strong> lente VKL 3,0x<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>CABO:</strong> Fita Aderente Pontilhada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">SA87</Card.Title>
                        <Card.Img variant="top" src="./img-armas/SA87.PNG" alt="SA87" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>LENTE:</strong> Mira Holográfica de Combate<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 50 Projéteis<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">M91</Card.Title>
                        <Card.Img variant="top" src="./img-armas/M91.PNG" alt="M91" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor mololitico<br/>
                            <strong>CANO:</strong> M91 pesado<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            <strong>CORONHA:</strong> FORGE TAC Perseguidor<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">MG34</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MG34.PNG" alt="MG34" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> FSS Brute<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>CORONHA:</strong> Sem coronha<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">HOLGER-26</Card.Title>
                        <Card.Img variant="top" src="./img-armas/HOLGER-26.PNG" alt="Holger-26" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>LENTE:</strong> Refletora Integral FSS<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Ranger<br/>
                            <strong>CABO:</strong> Fita Aderente Pontilhada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">BRUEN MK9</Card.Title>
                        <Card.Img variant="top" src="./img-armas/BRUEN MK9.PNG" alt="Bruen MK9" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor Monolitico<br/>
                            <strong>CANO:</strong> XRK Summit 26,8"<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 60 Projéteis<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">ML FINN</Card.Title>
                        <Card.Img variant="top" src="./img-armas/ML FINN.PNG" alt="ML Finn" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor Monolitico<br/>
                            <strong>CANO:</strong> XRK LongShot Adverso<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Ranger<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">STONER 63</Card.Title>
                        <Card.Img variant="top" src="./img-armas/STONE63.png" alt="Stoner 63" />
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
                            <Card.Title className="titulo-arma">RPD</Card.Title>
                        <Card.Img variant="top" src="./img-armas/RPD.png" alt="RPD" />
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
                            <Card.Title className="titulo-arma">M60</Card.Title>
                        <Card.Img variant="top" src="./img-armas/M60.png" alt="M60" />
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
            </Row>
        </Container>

    <Footer />
    </>);
};

export default MTS