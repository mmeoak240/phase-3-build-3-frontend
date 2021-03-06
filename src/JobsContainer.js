import React from "react";
import JobCard from "./JobCard";
import NewJob from "./NewJob";

const JobsContainer = ({
	jobs,
	search,
	setSearch,
	deleteJob,
	handleJobSubmit,
	handleUpdateJob,
}) => {
	const displayJobs = jobs.filter((job) =>
		job.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div style={{ marginleft: 10 }}>
			<div>
				<h1>Job Manager</h1>
			</div>

			{/* <Search search={search} setSearch={setSearch} /> */}
			<NewJob handleJobSubmit={handleJobSubmit} />
			<br></br>
			<br></br>

			<div>
				{displayJobs.map((job) => (
					<JobCard
						job={job}
						jobs={jobs}
						key={job.id}
						deleteJob={deleteJob}
						indvApplications={job.applications}
						handleUpdateJob={handleUpdateJob}
					/>
				))}
			</div>
		</div>
	);
};

export default JobsContainer;
