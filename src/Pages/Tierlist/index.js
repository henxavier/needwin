import React from 'react';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';
import { Container, Image} from 'react-bootstrap';

function Tierlist(){
    return(<>

    <NavBarra />

        <Container className="tierlist">
            <Image src="./img/tierlist_assalt.jpg"/><br/>
            <Container className="m-5">
            <span>
                TierList elaborado pelo Streamer Brasileiro e por mim adimirado Ogro, onde ranqueia as armas <u>Primarias</u> (não necessariamente) e de curta distancia.<br/>
                Nela vemos armas com alto poder de dano por segundo, tndo como prioridade derrubar o inimigo o quanto antes.<br/>
                <a href="https://www.youtube.com/watch?v=tMmG1a1_W3Y">Veja o video completo!</a>
            </span>
            </Container>
            <Image src="./img/tierlist_perto.jpg"/><br/>
            <Container className="m-5">
            <span>
                TierList elaborado pelo Streamer Brasileiro e por mim adimirado Ogro, onde ranqueia as armas <u>Secundarias</u> (não necessariamente) e de curta distancia.<br/>
                Nela vemos armas com alto poder de dano por segundo, tndo como prioridade derrubar o inimigo o quanto antes.<br/>
                <a href="https://www.youtube.com/watch?v=4l52PNekIgg">Veja o video completo!</a>
            </span>
            </Container>
        </Container>

    <Footer />
        
    </>);
};

export default Tierlist