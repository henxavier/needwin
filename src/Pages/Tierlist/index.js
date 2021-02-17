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
        <span>Ultima atualização (03/Fevereiro/2021)</span>
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
                    <td>RAM-7, Kar98k, SP-R 208, FAD 14, FAAC 1, MAC-10, MP5, Streetsweeper, Escopeta R9-0, Stoner 63</td>
                    </tr>
                    <tr>
                    <td>TIER A</td>
                    <td>Groza, Krig 6, XM4, AN-94, Bullrog, MP7,  ML FiNN, Bruen Mk9, Type 63, AX-50, HDR, LW3 - Thundra</td>
                    </tr>
                    <tr>
                    <td>TIER B</td>
                    <td>CR-56 Amax, AS VAL, Kilo 141, M4A1, ISO, Fennec, JAK-12, M16, M82, Rytec AMR</td>
                    </tr>
                    <tr>
                    <td>TIER C</td>
                    <td>AK-47, FAL, Oden, AK-74u, Gallo SA12, Origin 12: Escopeta, PKM, RPD, Pelington 703</td>
                    </tr>
                    <tr>
                    <td>TIER D</td>
                    <td>FR 5.56, 725, Dragunov, EBR-14, FN Scar 17, Gallo SA12, Hauer 77, KSP 45, M91, Milano 821, MK2 Carbine, Striker 45, VLK Rogue</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    <Footer />
        
    </>);
};

export default Tierlist