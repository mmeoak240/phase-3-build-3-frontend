import "./App.css";

import React, { useState, useEffect } from "react";
import JobsContainer from "./JobsContainer";

const App = () => {
	const [jobs, setJobs] = useState([
		{
			title: "",
			position: "",
			employment_type: "",
			education_level: "",
			applications: [],
		},
	]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:9292/jobs")
			.then((r) => r.json())
			.then((data) => setJobs(data));
	}, []);

	function handleSubmit(e, newJob, setFormData) {
		e.preventDefault();

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

	function handleEditSubmit(e, updatedJob, setFormData) {
		e.preventDefault();

		fetch("http://localhost:9292/jobs/${id}", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedJob),
		})
			.then((res) => res.json())
			.then((updatedJob) => setJobs([...jobs, updatedJob]));
		e.target.reset();
		setFormData("");
	}

	// function handleEditForm(e) {
	// 	e.preventDefault();
	// 	fetch("http://localhost:9292/jobs/${id}", {
	// 		method: "PATCH",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({ name: updatedName, email: updatedEmail }),
	// 	})
	// 		.then((resp) => resp.json())
	// 		.then((updatedApplication) => onUpdateApplication(updatedApplication));
	// }

	// function handleUpdateApplication(updatedApplication) {
	// 	const updatedApplications = jobs.applications.map((application) => {
	// 		if (application.id === updatedApplication.id) {
	// 			return updatedApplication;
	// 		} else {
	// 			return application;
	// 		}
	// 	});
	// 	setJobs(updatedApplication);
	// }

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
				onUpdateSubmit={handleEditSubmit}
				// onUpdateApplication={handleUpdateApplication}
			/>
		</div>
	);
};

export default App;
