import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function SMTS(){
    return(<>

    <NavBarra />
        
        <Container className="armascontainer">
            <Row>
                <Col className="armascard" md="4" sm="6">
                    <Card>
                        <Card.Body>
                            <Card.Title className="titulo-arma">AUG</Card.Title>
                        <Card.Img variant="top" src="./img-armas/AUG.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/P90.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/MP5.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/UZI.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/PP19 BIZON.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/MP7.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/STRIKER 45.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/FENNEC.PNG" />
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
                        <Card.Img variant="top" src="./img-armas/ISO.PNG" />
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
            </Row>
        </Container>

    <Footer />

    </>);
};

export default SMTS