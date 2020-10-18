import React from 'react';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import original from '../src/original.jpg';
import styled from 'styled-components';

export const Home = () => (
    <>
    <Slider />
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={original}/>
                    <Card.Body>
                        <Card.Title>Voyts</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante. </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={original}/>
                    <Card.Body>
                        <Card.Title>Voyts</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante. </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={original}/>
                    <Card.Body>
                        <Card.Title>Voyts</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante. </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
    <Jumbotron />
    <Container style={{marginBottom: '30px', marginTop: '30px'}}>
        <Row>
            <Col md={7}>
                <img src={original} height={400} width={550}/>
            </Col>
            <Col md={5}>
                <h2>Voyts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. </p>
            </Col>
        </Row>
    </Container>
    </>
)