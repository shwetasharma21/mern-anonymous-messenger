import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
	render() {
		return (
			<div className="vh-100 d-flex flex-column">
				<Navbar />
				<ToastContainer />
				<Main />
			</div>
		);
	}
}
export default App;
