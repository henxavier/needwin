import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function Atirador(){
    return(<>
        <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">EBR-14</Card.Title>
                        <Card.Img variant="top" src="./img-armas/EBR-14.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor Monolitico<br/>
                            <strong>CANO:</strong> FORGE TAC Precisão 22,0"<br/>
                            <strong>LENTE:</strong> Mira de Zoom Variavel<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura Tática<br/>
                            <strong>CORONHA:</strong> Apoio de rosto de precisão FTAC<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">CARABINA MK2</Card.Title>
                        <Card.Img variant="top" src="./img-armas/CARABINA MK2.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> FSS 24,0" de fábrica<br/>
                            <strong>LASER:</strong> Laser Tático<br/>
                            <strong>LENTE:</strong> Mira Zoom Variavel<br/>
                            <strong>CORONHA:</strong> Apoio de rosto FSS MK2<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">KAR98K</Card.Title>
                        <Card.Img variant="top" src="./img-armas/KAR98K.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> Singuard personalizado 27,6"<br/>
                            <strong>LENTE:</strong> Mira de Zoom Variável<br/>
                            <strong>CABO:</strong> Fira Aderente Emborrachada<br/>
                            <strong>CORONHA:</strong> Apoio de rosto esportivo FTAC<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">BESTA</Card.Title>
                        <Card.Img variant="top" src="./img-armas/BESTA.PNG" />
                            <Card.Text>
                            <strong>CABO:</strong> Cabo de 28 fios<br/>
                            <strong>BRAÇOS:</strong> XRK Thunder 200 Lb<br/>
                            <strong>LENTE:</strong> Minirrefletora Militar<br/>
                            <strong>CORONHA:</strong> FORGE TAC Dardo CB<br/>
                            <strong>VANTAGEM:</strong> Mãos Leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">SKS</Card.Title>
                        <Card.Img variant="top" src="./img-armas/SKS.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> M59/66 FSS 22"<br/>
                            <strong>LENTE:</strong> Lente VLK 3,0x<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Comando<br/>
                            <strong>CORONHA:</strong> Coronha de Fuzil SKS<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">SP-R 208</Card.Title>
                        <Card.Img variant="top" src="./img-armas/SPR208.png" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor monolitico<br/>
                            <strong>CANO:</strong> SP-R 26"<br/>
                            <strong>LENTE:</strong> Mira de Zoom Variavel<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores de 5 projéteis Norma Mag .300<br/>
                            <strong>CORONHA:</strong> XRK SP-LITE 208 Blitz<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">TYPE 63</Card.Title>
                        <Card.Img variant="top" src="./img-armas/TYPE63.png" />
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
                            <Card.Title className="titulo-arma">M16 (CW)</Card.Title>
                        <Card.Img variant="top" src="./img-armas/M16 CW.png" />
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
                            <Card.Title className="titulo-arma">AUG (CW)</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AUG CW.png" />
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
                            <Card.Title className="titulo-arma">FAD 14</Card.Title>
                        <Card.Img variant="top" src="./img-armas/FAD14.png" />
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

export default Atirador