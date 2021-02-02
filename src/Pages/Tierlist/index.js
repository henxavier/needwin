import React from 'react';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';
import { Container, Table} from 'react-bootstrap';

function Tierlist(){
    return(<>

    <NavBarra />

    <Container className="tabela-req">
        <h1>RANKS DE ARMAS DO WARZONE</h1>
        <span>Aqui temos a lista de RANKS do WARZONE, que contem todas as armas primárias do Modern Warfare e tambem do Cold War.</span><br/>
        <span>Ultima atualização (11/Janeiro/2021)</span>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th>RANKS</th>
                    <th>ARMAS PRIMARIAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>TIER S</td>
                    <td>DMR 14, FiNN, Groza, PKM, Grau 5.56, FAL, HDR, MAC-10, MP7, SP-R 208</td>
                    </tr>
                    <tr>
                    <td>TIER A</td>
                    <td>AS VAL, AUG, AUG (Cold War), AX-50, CR-56 AMAX, FFAR 1, Fennec, Kilo 141, M4A1, M13, M16, MP5 (MW/Cold War), Kar98k, LW3 - Tundra, RPD, Type 63, XM4</td>
                    </tr>
                    <tr>
                    <td>TIER B</td>
                    <td>AN-94, AK-47 (MW/Cold War), Bullfrog, Crossbow, ISO, JAK-12, Krig 6, M60, Oden, P90, Pelington 703, PP19 Bizon, RAM-7, R9-0, SA87, SKS, Stoner 63, Streetsweeper</td>
                    </tr>
                    <tr>
                    <td>TIER C</td>
                    <td>AK-74u, Bruen, FR 5.56, Holger-26, M82, MG34, Model 680, Origin 12, Uzi, QBZ-83</td>
                    </tr>
                    <tr>
                    <td>TIER D</td>
                    <td>725, Dragunov, EBR-14, FN Scar 17, Gallo SA12, Hauer 77, KSP 45, M91, Milano 821, MK2 Carbine, Striker 45, VLK Rogue</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    <Footer />
        
    </>);
};

export default Tierlist