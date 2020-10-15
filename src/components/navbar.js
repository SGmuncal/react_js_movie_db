import React, {Component} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/movie_db.svg"
                    width="130"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link href="#" style={{color:'white'}} title="not available">Movies</Nav.Link>
                    <Nav.Link href="#" style={{color:'white'}} title="not available">TV Shows</Nav.Link>
                    <Nav.Link href="#" style={{color:'white'}} title="not available">People</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}