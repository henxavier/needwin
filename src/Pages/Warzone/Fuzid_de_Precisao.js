import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function Precisao(){
    return(<>

    <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">DRAGUNOV</Card.Title>
                        <Card.Img variant="top" src="./img-armas/DRAGUNOV.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> Cano Estandido 660mm<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 20 Projéteis<br/>
                            <strong>CORONHA:</strong> Caçador-Batedor FTAC<br/>
                            <strong>VANTAGEM:</strong> Foco<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">HDR</Card.Title>
                        <Card.Img variant="top" src="./img-armas/HDR.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> HDR 26,9" profissional<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de 9 Projéteis<br/>
                            <strong>LENTE:</strong> Mira de Zoom Variável<br/>
                            <strong>CORONHA:</strong> Coronha nômade FSS<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AX-50</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AX-50.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor Rytec AMR<br/>
                            <strong>CANO:</strong> Reta Sete FTAC<br/>
                            <strong>MUNIÇÃO:</strong> Carregadore 5-P Explosivo 25x59 mm<br/>
                            <strong>CORONHA:</strong> Protetor Tático STOVL<br/>
                            <strong>CABO:</strong> Fita Aderente Granulada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">RYTEC AMR</Card.Title>
                        <Card.Img variant="top" src="./img-armas/RYTEC AMR.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> Cano Estandido 660mm<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 20 Projéteis<br/>
                            <strong>CORONHA:</strong> Caçador-Batedor FTAC<br/>
                            <strong>VANTAGEM:</strong> Foco<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">PELINGTON 703</Card.Title>
                        <Card.Img variant="top" src="./img-armas/PELINGTON703.png" />
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
                            <Card.Title className="titulo-arma">LW3 - TUNDRA</Card.Title>
                        <Card.Img variant="top" src="./img-armas/LW3TUNDRA.png" />
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
                            <Card.Title className="titulo-arma">M82</Card.Title>
                        <Card.Img variant="top" src="./img-armas/M82.png" />
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

export default Precisao