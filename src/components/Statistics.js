import React, { useState, useEffect } from 'react';
import Api from '../api/Api';
import { Table, Card, Container, Row, Col } from 'react-bootstrap';

export default function Statistics() {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        fetchPokemon();
    })

    async function fetchPokemon() {
        const response = await Api.get("/");
        setStatistics(response.data);
    }

    return (
        <div>
            <h2>Statistics</h2>
            {statistics.map((i) => (
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="logo192.png" />
                                <Card.Body>
                                    <Card.Title>Name:{i.name}</Card.Title>
                                    <Card.Text>Front</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="logo192.png" />
                                <Card.Body>
                                    <Card.Title>Name:</Card.Title>
                                    <Card.Text>Back</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="logo192.png" />
                                <Card.Body>
                                    <Card.Title>Name:</Card.Title>
                                    <Card.Text>Shiny Front</Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>

                            <Card>
                                <Card.Img variant="top" src="logo192.png" />
                                <Card.Body>
                                    <Card.Title>Name:</Card.Title>
                                    <Card.Text>Shiny Back</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            ))}
            <br />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>

                <tbody>
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
                    <tr>
                        <td>Data1</td>
                        <td>Data1</td>
                        <td>Data1</td>
                        <td>Data1</td>
                        <td>Data1</td>
                    </tr>
                </tbody>
            </Table>

            <hr />
        </div >
    )
}
