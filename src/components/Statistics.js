import React, { useState, useEffect } from 'react';
import Api from '../api/Api';
import { Table, Card, Container, Row, Col } from 'react-bootstrap';

export default function Statistics() {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        fetchPokemon();
    })

    async function fetchPokemon() {
        const toArray = [];
        const response = await Api.get("/");
        toArray.push(response.data)
        setStatistics(toArray);
        console.log(response);
    }

    return (
        <div>
            {statistics.map((i) => (
                <div key={i.id}>
                    <Container>
                        <h2><u>Statistics</u></h2>
                        <h3> Name: {i.name[0].toUpperCase() + i.name.slice(1)}</h3>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={i.sprites["front_default"]} />
                                    <Card.Body>
                                        <Card.Title>Front</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={i.sprites["back_default"]} />
                                    <Card.Body>
                                        <Card.Title>Back</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={i.sprites["front_shiny"]} />
                                    <Card.Body>
                                        <Card.Title>Shiny Front</Card.Title>
                                    </Card.Body>
                                </Card>

                            </Col>

                            <Col>

                                <Card>
                                    <Card.Img variant="top" src={i.sprites["back_shiny"]} />
                                    <Card.Body>
                                        <Card.Title>Shiny Back</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <br />

                    <h4>Pokemon Statistics</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Ability</th>
                                <th>Pokedex #</th>
                                <th>Height</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>{i.order}</td>
                                <td>{i.height}</td>
                                <td>{i.weight}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Ability</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                            </tr>
                            <tr>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                                <td>Data1</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            ))}


            <hr />

        </div >
    )
}
