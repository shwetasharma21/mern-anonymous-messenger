import React, { Component } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";

import { loginRequest, registerRequest } from "../utils/apiHelper";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
			loginData: {
				email: "",
				pass: "",
			},
			registerData: {
				name: "",
				email: "",
				pass: "",
				cpass: "",
			},
		};
	}
	handleLoginInput = ({ currentTarget }) => {
		const newData = { ...this.state.loginData };
		newData[currentTarget.name] = currentTarget.value;
		this.setState({
			loginData: newData,
		});
	};

	handleRegisterInput = ({ currentTarget }) => {
		const newData = { ...this.state.registerData };
		newData[currentTarget.name] = currentTarget.value;
		this.setState({
			registerData: newData,
		});
	};

	handleLoginSubmit = async (e) => {
		e.preventDefault();
		const { email, pass } = this.state.loginData;
		const result = await loginRequest(email, pass);

		if (!result.success) {
			return toast.error(result.message);
		}
		const token = result.token;
		if (!token) {
			return toast.error("Error while log in");
		}
		toast.success(result.message);
		this.redirectToHome(token);
	};
	handleRegisterSubmit = async (e) => {
		e.preventDefault();
		const { name, email, pass, cpass } = this.state.registerData;
		const result = await registerRequest(name, email, pass, cpass);

		if (!result.success) {
			return toast.error(result.message);
		}
		const token = result.token;
		if (!token) {
			return toast.error("Error while registering");
		}
		toast.success(result.message);
		this.redirectToHome(token);
	};

	redirectToHome = (token) => {
		localStorage.setItem("token", token);
		// Redirect to Hoome logic
	};

	getLogin() {
		const loginData = this.state.loginData;
		return (
			<>
				<Card.Header className="fw-bold h3 text-center text-softpurple">
					Log in
				</Card.Header>
				<Card.Body>
					<Form onSubmit={this.handleLoginSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								name="email"
								type="email"
								placeholder="Enter Email"
								value={loginData.email}
								onChange={this.handleLoginInput}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								name="pass"
								type="password"
								placeholder="Enter password"
								value={loginData.pass}
								onChange={this.handleLoginInput}
								required
							/>
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
		const { registerData } = this.state;
		return (
			<>
				<Card.Header className="fw-bold h3 text-center text-softpurple">
					Register
				</Card.Header>
				<Card.Body>
					<Form onSubmit={this.handleRegisterSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								name="name"
								value={registerData.name}
								type="text"
								placeholder="Enter name"
								onChange={this.handleRegisterInput}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								name="email"
								value={registerData.email}
								type="email"
								placeholder="Enter email"
								onChange={this.handleRegisterInput}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								name="pass"
								value={registerData.pass}
								type="password"
								placeholder="Enter Password"
								onChange={this.handleRegisterInput}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								name="cpass"
								value={registerData.cpass}
								type="password"
								placeholder="Confirm Password"
								onChange={this.handleRegisterInput}
								required
							/>
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
