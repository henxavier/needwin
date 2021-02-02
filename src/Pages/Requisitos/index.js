import React from 'react';
import NavBarra from '../../componentes/NavBarra';
import Footer from '../../componentes/Footer';
import { Container, Table} from 'react-bootstrap';

function Requisitos(){
    return(<>

    <NavBarra />

        <Container className="tabela-req">
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th> </th>
                    <th>REQUISITOS MÍNIMOS</th>
                    <th>REQUISITOS RECOMENDADAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Sistema Operacional</td>
                    <td>Windows 7 64 bits (SP1) ou Windows 10 64 bits</td>
                    <td>Última atualização do Windows® 10 64 bits</td>
                    </tr>
                    <tr>
                    <td>PROCESSADOR</td>
                    <td>Intel Core i3-4340 ou AMD FX-6300</td>
                    <td>Processador Intel Core i5-2500K ou AMD Ryzen R5 1600X</td>
                    </tr>
                    <tr>
                    <td>MEMÓRIA</td>
                    <td>8GB RAM</td>
                    <td>12GB RAM</td>
                    </tr>
                    <tr>
                    <td>VÍDEOS</td>
                    <td>NVIDIA GeForce GTX 670/GeForce GTX 1650 ou Radeon HD 7950</td>
                    <td>NVIDIA GeForce GTX 970/GTX 1660 ou Radeon R9 390/AMD RX 580</td>
                    </tr>
                    <tr>
                    <td>MEMÓRIA DE VÍDEOS</td>
                    <td>2GB</td>
                    <td>4GB</td>
                    </tr>
                    <tr>
                    <td>ESPAÇO EM DISCO</td>
                    <td colSpan="2">175GB</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    <Footer />
        
    </>);
};

export default Requisitos