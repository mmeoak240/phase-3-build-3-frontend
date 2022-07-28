import React, { useState } from "react";

function NewApplication({ jobs, addNewApplication }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [jobOption, setJobOption] = useState("");

	const newJob = {
		name,
		email,
		job_id: jobOption,
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:9292/donations", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newJob),
		})
			.then((resp) => resp.json())
			.then((application) => {
				addNewApplication(application);
			});
	};

	return (
		<div>
			<h3>Apply</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="amount">Name:</label>
				<input
					id="name"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>
					Job:
					<select
						placeholder="Select a job"
						onChange={(e) => setJobOption(e.target.value)}
					>
						<option value="none">Select a job:</option>
						{jobs.map((job) => (
							<option key={job.id} value={job.id}>
								{job.name}
							</option>
						))}
					</select>
				</label>
				<button type="submit">Apply</button>
			</form>
		</div>
	);
}

export default NewApplication;
