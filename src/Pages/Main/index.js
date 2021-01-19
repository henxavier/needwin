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
  <span>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</span>
  </Container>

  <Container fluid className=" my-5">
  <Image src="img/valorant.png" fluid/>
  <h1>VALORANT</h1>
  <span>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</span>
  </Container>
  <Container fluid className=" my-5">
  <Image src="img/camps.png" fluid/>
  <h1>COMPETIÇÕES</h1>
  <span>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</span>
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