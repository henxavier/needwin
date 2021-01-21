import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function Escopetas(){
    return(<>

    <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">nome arma</Card.Title>
                        <Card.Img variant="top" src="./img-armas/MODELO 680.PNG" />
                            <Card.Text>
                            <strong>CANO:</strong> XRK 14,0" SWAT<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Mercenario<br/>
                            <strong>CORONHA:</strong> Sem coronha<br/>
                            <strong>VANTAGEM:</strong> Mãos leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">nome arma</Card.Title>
                        <Card.Img variant="top" src="./img-armas/ESCOPETA R9-0.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Supressor Monolitico<br/>
                            <strong>CANO:</strong> FORGE TAC Sentinela<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>MUNIÇÃO:</strong> Projéteis Bafo de Dragão<br/>
                            <strong>VANTAGENS:</strong> Mãos Leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">nome arma</Card.Title>
                        <Card.Img variant="top" src="./img-armas/725.PNG" />
                            <Card.Text>
                            <strong>CANO:</strong> Cano Liso Tempus<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Mercenário<br/>
                            <strong>GUARDA:</strong> Empunhadura Firme Tempus<br/>
                            <strong>VANTAGEM:</strong> Mãos Leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">nome arma</Card.Title>
                        <Card.Img variant="top" src="./img-armas/ORIGIN 12.PNG" />
                            <Card.Text>
                            <strong>BOCA:</strong> Estrangulador<br/>
                            <strong>CANO:</strong> FORGE TAC Impaler<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>CORONHA:</strong> Sem coronha<br/>
                            <strong>VANTAGENS:</strong> Mãos Leves<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">nome arma</Card.Title>
                        <Card.Img variant="top" src="./img-armas/VLK ROGUE.PNG" />
                            <Card.Text>
                            <strong>CANO:</strong> Warlord 16"<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>CORONHA:</strong> Caçador FTAC<br/>
                            <strong>ACOPLAMENTO:</strong> Empunhadura de Telha VLK Prime<br/>
                            <strong>MUNIÇÃO:</strong> Carregador de Projéteis Bafo de Dragão<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">nome arma</Card.Title>
                        <Card.Img variant="top" src="./img-armas/JAK-12.png" />
                            <Card.Text>
                            <strong>BOCA:</strong> FORGE TAC Marauder<br/>
                            <strong>CANO:</strong> ZRL J-3600 Torrent<br/>
                            <strong>LASER:</strong> Laser de 5 mW<br/>
                            <strong>MUNIÇÃO:</strong> Carregadores duplos de 20 projeteis<br/>
                            <strong>CABO:</strong> Fita Aderente Pontilhada<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">HAUER 77</Card.Title>
                        <Card.Img variant="top" src="./img-armas/HAUER77.png" />
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
                            <Card.Title className="titulo-arma">GALLO SA12</Card.Title>
                        <Card.Img variant="top" src="./img-armas/GALLOSA12.png" />
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
                            <Card.Title className="titulo-arma">STREETSWEEPER</Card.Title>
                        <Card.Img variant="top" src="./img-armas/STREETSWEEPER.png" />
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

export default Escopetas