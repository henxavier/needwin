import React from 'react';
import {Image, Container} from 'react-bootstrap';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';

function Main(){
    return(<>

    <NavBarra />
        
        <Container className="apresent">

  <Container fluid className=" my-5">
  <Image src="img/warzone.png" fluid/>
  <h1>WARZONE</h1>
  <span>COD: Warzone é o Battle Royale da popular franquia de tiro em primeira pessoa Call of Duty. Ele pode ser baixado gratuitamente para PC, PlayStation 4 e Xbox One e também tem como facilidade o crossplay com todas essas plataformas. <br/>
        Embora seja um jogo gratuito, tem como modo de sustentabilidade passes de batalha e skins avulsas na lojas<br/>
        Você pode fazer o download de Warzone na Battle.net (PC) e nas lojas digitais dos consoles, PlayStation Store e Xbox Game Store.
</span>
  </Container>

  <Container fluid className=" my-5">
  <Image src="img/camps.png" fluid/>
  <h1>COMPETIÇÕES</h1>
  <span>Need Win é um projeto onde foca juntar o competitivo com o casual, onde a emoção toma conta, a ansiedade de jogar e competir contra outros jogadores, esse é o nosso foco. <br/>
        Em parcerias temos o foco de crescer esse projeto e ultrapassando barreiras.<br/>
        Se você é Streamer e gosta de competições, faça parte deste time!
</span>
  </Container>
</Container>


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


      <Footer />

</>);
};

export default Main