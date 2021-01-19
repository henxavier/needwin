import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col} from 'react-bootstrap';
import {FaFacebookSquare, FaYoutube, FaTwitch } from 'react-icons/fa';

function Footer() {
    return (<>
    <Container fluid>

    <Row className="rodape">
      <Col className="rodape-conteudo">
      <Image src="img/xavier.png" className="img-footer"/>
      <p>Olá... Eu sou o Xavier!</p>
      <p>Sou desenvolvedor e criador deste projeto. Me siga nas redes.</p>
        <a href="https://www.facebook.com/henxavier"><FaFacebookSquare /></a>
        <a href="/home"><FaTwitch /></a>

      </Col>
        

      <Col className="rodape-conteudo">
      <Image src="img/needwin.svg" className="img-footer"/>
      <p>Projeto Need Win, nos apoie!</p>
        <a href="https://www.facebook.com/needwinoficial"><FaFacebookSquare /></a>
        <a href="https://www.youtube.com/channel/UCyFvFKPM-3qT-a-L2ZVfkOQ"><FaYoutube /></a>

      </Col>
    </Row>
  
    </Container>
    </>);
}

export default Footer