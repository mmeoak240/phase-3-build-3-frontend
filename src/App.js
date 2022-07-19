import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import JobsContainer from "./JobsContainer";

const App = () => {
	const [jobs, setJobs] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:9292/jobs")
			.then((r) => r.json())
			.then((data) => setJobs(data));
	}, []);

	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/jobslist">
					<JobsContainer jobs={jobs} search={search} setSearch={setSearch} />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
