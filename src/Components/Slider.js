import React from 'react';
import { Navbar, Nav, Button, Carousel } from 'react-bootstrap';
import original from '../original.jpg';


export default function Slider() {
    return (
    <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={original}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Voyts</h3>
                <p>Hello, my names Voyts</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={original}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Voyts</h3>
                <p>Hello, my names Voyts</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={original}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Voyts</h3>
                <p>Hello, my names Voyts</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )}