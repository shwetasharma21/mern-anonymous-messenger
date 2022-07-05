import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";

class App extends Component {
	render() {
		return (
			<div className="vh-100 d-flex flex-column">
				<Navbar />
				<Main />
			</div>
		);
	}
}
export default App;
