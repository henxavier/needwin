import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col} from 'react-bootstrap';
import {FaFacebookSquare, FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (<>
    <Container fluid>

    <Row className="rodape">
      <Col className="rodape-conteudo">
      <Image src="img/xavier.png" className="img-footer"/>
      <p>Olá... Eu sou o Xavier!</p>
      <p>Sou desenvolvedor e criador deste projeto. Me acompanhe.</p>
        <a href="https://www.facebook.com/henxavier" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
        <a href="https://www.twitch.tv/henxavier" target="_blank" rel="noreferrer"><FaTwitch /></a>

      </Col>
        

      <Col className="rodape-conteudo">
      <Image src="img/needwin.svg" className="img-footer"/>
      <p>Projeto Need Win, nos apoie!</p>
        <a href="https://www.facebook.com/needwinoficial" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
        <a href="https://www.instagram.com/needwinoficial/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.youtube.com/channel/UCyFvFKPM-3qT-a-L2ZVfkOQ" target="_blank" rel="noreferrer"><FaYoutube /></a>

      </Col>
    </Row>
  
    </Container>
    </>);
}

export default Footer