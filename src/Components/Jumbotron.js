import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import original from '../original.jpg';
import styled from 'styled-components';


const Styles = styled.div`
    .jumbo {
        background: url(${original}) no-repeat, fixed bottom;
        bakground-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Voyts</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie erat, in consequat est. Phasellus a venenatis dolor, sed varius lectus. Vivamus gravida, mi nec volutpat vehicula, est urna accumsan arcu, at egestas eros lectus ut ante. Mauris lobortis consequat orci, eu congue erat vehicula consequat. Sed hendrerit ligula eget viverra sagittis. Ut ut ex at tellus consequat lacinia. Morbi aliquam efficitur cursus. Quisque cursus ligula ut quam lacinia laoreet. Phasellus vitae dictum velit.</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;