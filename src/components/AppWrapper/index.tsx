import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
    children: React.ReactElement,
}
const AppWrapper: React.FC<Props>  =({ children}) =>{
    return(
        <Container>
            <Row>
                <Col>
                    <h3>Header</h3>
                </Col>
            </Row>
            {children}
        </Container>
    )
};

export default AppWrapper;
