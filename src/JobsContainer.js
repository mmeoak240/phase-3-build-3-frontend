import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";
import NewJob from "./NewJob";
import NewApplication from "./NewApplication";

const JobsContainer = ({
	jobs,
	search,
	setSearch,
	deleteJob,
	handleJobSubmit,
	handleUpdateJob,
	handleApplicationSubmit,
}) => {
	const displayJobs = jobs.filter((job) =>
		job.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div style={{ marginleft: 10 }}>
			<div>
				<h1>Job Manager</h1>
			</div>

			<Search search={search} setSearch={setSearch} />
			<NewJob handleJobSubmit={handleJobSubmit} />
			<br></br>
			<br></br>
			<NewApplication handleApplicationSubmit={handleApplicationSubmit} />

			<div>
				{displayJobs.map((job) => (
					<JobCard
						job={job}
						key={job.id}
						deleteJob={deleteJob}
						applications={job.applications}
						handleUpdateJob={handleUpdateJob}
					/>
				))}
			</div>
		</div>
	);
};

export default JobsContainer;
