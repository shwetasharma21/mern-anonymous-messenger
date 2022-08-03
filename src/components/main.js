import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import Dashboard from "./dashboard";

class Main extends Component {
	render() {
		return (
			<div className="flex-grow-1 bg-softpurple">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		);
	}
}
export default Main;
