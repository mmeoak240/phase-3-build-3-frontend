import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

const App = () => {
	return (
		<div>
			<NavBar />
			<Home />
		</div>
	);
};

export default App;
