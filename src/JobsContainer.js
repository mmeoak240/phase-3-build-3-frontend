import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";
import NewJob from "./NewJob";

const JobsContainer = ({
	jobs,
	search,
	setSearch,
	deleteJob,
	handleSubmit,
	setApplications,
	applications,
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
			<NewJob handleSubmit={handleSubmit} />

			<div>
				{displayJobs.map((job) => (
					<JobCard
						job={job}
						key={job.id}
						deleteJob={deleteJob}
						applications={applications}
						setApplications={setApplications}
					/>
				))}
			</div>
		</div>
	);
};

export default JobsContainer;
