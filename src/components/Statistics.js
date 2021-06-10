import React, { useState, useEffect } from "react";
import Api from "../api/Api";
import { Table, Card, Container, Row, Col } from "react-bootstrap";

const Statistics = (props) => {
  const [statistics, setStatistics] = useState([]);
  const [type, setType] = useState("");
  const [ability, setAbility] = useState("");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAtk, setSpecialAtk] = useState("");
  const [specialDef, setSpecialDef] = useState("");
  const [speed, setSpeed] = useState("");

  useEffect(() => {
    fetchPokemon();
  });

  async function fetchPokemon() {
    const toArray = [];
    const response = await Api.get("/" + props.SearchQuery);
    setType(response.data.types[0].type.name);
    setAbility(response.data.abilities[0].ability.name);
    setHp(response.data.stats[0].base_stat);
    setAttack(response.data.stats[1].base_stat);
    setDefense(response.data.stats[2].base_stat);
    setSpecialAtk(response.data.stats[3].base_stat);
    setSpecialDef(response.data.stats[4].base_stat);
    setSpeed(response.data.stats[5].base_stat);
    toArray.push(response.data);
    setStatistics(toArray);
    console.log(toArray);
  }

  return (
    <div>
      {statistics.map((i) => (
        <div key={i.id}>
          <Container>
            <h2>
              <u>Statistics</u>
            </h2>
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
                <td>{type[0].toUpperCase() + type.slice(1)}</td>
                <td>{ability[0].toUpperCase() + ability.slice(1)}</td>
                <td>{i.order}</td>
                <td>{i.height}</td>
                <td>{i.weight}</td>
              </tr>
            </tbody>
          </Table>

          <h4>Base Stats</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>HP</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Sp.Atk</th>
                <th>Sp.Def</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{hp}</td>
                <td>{attack}</td>
                <td>{defense}</td>
                <td>{specialAtk}</td>
                <td>{specialDef}</td>
                <td>{speed}</td>
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
    </div>
  );
};

export default Statistics;
