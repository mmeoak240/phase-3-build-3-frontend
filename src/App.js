import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import JobsContainer from "./JobsContainer";

const App = () => {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/jobslist">
					<JobsContainer />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
