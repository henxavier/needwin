import React from 'react';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';
import { Container, Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Campeonatos(){
    return(<>

    <NavBarra />

    <Container className="twitch">
                <div class="twitch-video">
                  <iframe
                    src="https://player.twitch.tv/?channel=henxavier&parent=needwin.com.br&autoplay=yes"
                    title="Live Stream HenXavier"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen="true"
                    height="100%"
                    width="100%">
                  </iframe>
                </div>
    </Container>

    <Container className="area-camps">
        <Row>
            <Col className="armascard" md="4" sm="6">
                <Card>
                    <Card.Body>
                        <Card.Title className="titulo-arma">REGULAMENTO DO CAMPEONATO</Card.Title>
                        <Link href="/">EM BREVE</Link>
                        <Card.Text>
                        Regras tem que ser impostas e se seguidas para o bem estar de todos os jogadores, a intenção além do prazer de jogar, possam se divertir também!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="armascard" md="4" sm="6">
                <Card>
                    <Card.Body>
                        <Card.Title className="titulo-arma">INSCRIÇÕES DO CAMPEONATO</Card.Title>
                        <Link href="/">EM BREVE</Link>
                        <Card.Text>
                        Inscrições rapidas para organização da competição e que tudo seja transparente.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    <Footer />
        
    </>);
};

export default Campeonatos