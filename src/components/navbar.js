import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import silent from "../assets/silent.svg";

class MyNavbar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg">
				<Container>
					<Link to="/" className="text-softpurple text-decoration-none">
						<img
							src={silent}
							width="30"
							height="30"
							className="d-inline-block align-top me-2"
							alt="React Bootstrap logo"
						/>
						Hush-Hush
					</Link>

					<Nav className="ms-auto">
						<Link to="/login" className="text-softpurple text-decoration-none">
							Login
						</Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}
export default MyNavbar;
