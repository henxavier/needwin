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

        <Container className="tabela-req">
            <h1>Configurações Recomendadas</h1>
            <span>Aqui temos as Configurações Recomendadas para quem quer alcançar o modo de desempenho, focando em menas bobagem na tela e focando no FPS mas adquirir vantagens sobre oponentes.</span>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th colSpan="2">DETALHES E TEXTURAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Qualidade de transmissão</td>
                    <td>Normal</td>
                    </tr>
                    <tr>
                    <td>Resolução de texturas</td>
                    <td>Baixa</td>
                    </tr>
                    <tr>
                    <td>Filtro de textura anisotrópico</td>
                    <td>Normal</td>
                    </tr>
                    <tr>
                    <td>Qualidade de particulas</td>
                    <td>Baixa</td>
                    </tr>
                    <tr>
                    <td>Impactos de bala e Grafites</td>
                    <td>Ativado</td>
                    </tr>
                    <tr>
                    <td>Tesselação</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Transmissão de texturas sob demanda</td>
                    <td>Ativado</td>
                    </tr>
                    <tr>
                    <td>Limite diário de download (GB)</td>
                    <td>1.0</td>
                    </tr>
                    <tr>
                    <td>Tamanho do cache de texxturas (GB)</td>
                    <td>16</td>
                    </tr>
                </tbody>
                    <thead>
                        <tr>
                        <th colSpan="3">SOMBRA E ILUMINAÇÃO</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                    <td>Resolução das sombras do mapa</td>
                    <td>Baixa</td>
                    </tr>
                    <tr>
                    <td>Guardar sombras artificiais no cache</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Iluminação de particulas</td>
                    <td>Baixa</td>
                    </tr>
                    <tr>
                    <td>Raytracing DirectX</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Oclusão de ambiente</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Reflexo de tela (SSR)</td>
                    <td>Desativado</td>
                    </tr>
                </tbody>
                    <thead>
                        <tr>
                        <th colSpan="2">DETALHES E TEXTURAS</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                    <td>Anti-aliasing</td>
                    <td>Desligado</td>
                    </tr>
                    <tr>
                    <td>Profundidade de campo</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Força cinematográfica</td>
                    <td>1.00</td>
                    </tr>
                    <tr>
                    <td>Perda de foco por movimento do mundo</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Perda de foco por movimento da arma</td>
                    <td>Desativado</td>
                    </tr>
                    <tr>
                    <td>Granulação</td>
                    <td>0.00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    <Footer />
        
    </>);
};

export default Requisitos