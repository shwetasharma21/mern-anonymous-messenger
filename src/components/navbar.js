import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import silent from "../assets/silent.svg";

class MyNavbar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="#home" className="text-softpurple">
						<img
							src={silent}
							width="30"
							height="30"
							className="d-inline-block align-top me-2"
							alt="React Bootstrap logo"
						/>
						Hush-Hush
					</Navbar.Brand>
					<Nav className="ms-auto">
						<Nav.Link href="#deets" className="text-softpurple">
							Login
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}
export default MyNavbar;
