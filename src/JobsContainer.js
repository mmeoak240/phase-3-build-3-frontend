import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";

const JobsContainer = ({ jobs, search, setSearch }) => {
	const displayJobs = jobs.filter((job) =>
		job.education_level.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<div>
				<h1>Jobs List</h1>
			</div>

			<Search search={search} setSearch={setSearch} />

			<div>
				{displayJobs.map((job) => (
					<JobCard job={job} key={job.id} />
				))}
			</div>
		</div>
	);
};

export default JobsContainer;
