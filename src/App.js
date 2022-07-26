import "./App.css";

import React, { useState, useEffect } from "react";
import JobsContainer from "./JobsContainer";

const App = () => {
	const [jobs, setJobs] = useState([]);
	const [applications, setApplications] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:9292/jobs")
			.then((r) => r.json())
			.then((data) => setJobs(data));
	}, []);

	useEffect(() => {
		fetch("http://localhost:9292/applications")
			.then((r) => r.json())
			.then((data) => setApplications(data));
	}, []);

	function handleSubmit(e, newJob, setFormData) {
		e.preventDefault();
		console.log(newJob);

		fetch("http://localhost:9292/jobs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newJob),
		})
			.then((res) => res.json())
			.then((newJob) => setJobs([...jobs, newJob]));
		e.target.reset();
		setFormData("");
	}

	const deleteJob = (id) => {
		const updatedJobs = jobs.filter((job) => job.id !== id);
		setJobs(updatedJobs);
	};

	return (
		<div>
			<JobsContainer
				jobs={jobs}
				search={search}
				setSearch={setSearch}
				deleteJob={deleteJob}
				handleSubmit={handleSubmit}
				applications={applications}
				setApplications={setApplications}
			/>
		</div>
	);
};

export default App;
