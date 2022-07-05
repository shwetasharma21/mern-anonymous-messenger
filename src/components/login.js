import React, { Component } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
		};
	}
	getLogin() {
		return (
			<>
				<Card.Header className="fw-bold h3 text-center text-softpurple">
					Log in
				</Card.Header>
				<Card.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter Email" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter password" />
						</Form.Group>
						<div className="d-flex">
							<Button
								variant="softpurple"
								type="submit"
								className="mx-auto border-none"
							>
								Log In
							</Button>
						</div>
					</Form>
					<div className="d-flex justify-content-center align-items-center">
						<span>Create an account?</span>
						<Button
							variant="link"
							onClick={() => this.setState({ isLogin: false })}
						>
							Sign up
						</Button>
					</div>
				</Card.Body>
			</>
		);
	}
	getRegister() {
		return (
			<>
				<Card.Header className="fw-bold h3 text-center text-softpurple">
					Register
				</Card.Header>
				<Card.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter name" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter Password" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Confirm Password" />
						</Form.Group>
						<div className="d-flex">
							<Button
								variant="softpurple"
								type="submit"
								className="mx-auto border-none"
							>
								Submit
							</Button>
						</div>
					</Form>
					<div className="d-flex justify-content-center align-items-center">
						<span>Already have an account?</span>
						<Button
							variant="link"
							onClick={() => this.setState({ isLogin: true })}
						>
							Log in
						</Button>
					</div>
				</Card.Body>
			</>
		);
	}
	render() {
		return (
			<div className="d-flex flex-column pt-3">
				<Container>
					<Row>
						<Col sm={12} md={8} lg={6} className="mx-auto">
							<Card className="shadow">
								{this.state.isLogin ? this.getLogin() : this.getRegister()}
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default Login;
