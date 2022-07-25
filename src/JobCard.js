import React, { useState } from "react";

const JobCard = ({ job, deleteJob, setApplications, applications }) => {
	const { title, position, employment_type, education_level, id } = job;

	const [showApp, setShowApp] = useState(false);

	const handleDelete = () => {
		deleteJob(id);
		fetch(`http://localhost:9292/jobs/${id}`, {
			method: "DELETE",
		});
	};

	const renderDescription = (
		<div>
			<div>
				<ul>
					<h5>{title}</h5>
					<strong>Position:</strong> {position}
					<p></p>
					<strong>Employment Type:</strong> {employment_type}
					<p></p>
					<strong>Education needed:</strong> {education_level}
					<p></p>
					<button onClick={handleDelete}>Filled</button>
					<button onClick={() => setShowApp((showApp) => !showApp)}>
						{showApp ? "Hide" : "Applications"}
					</button>
				</ul>
				{showApp ? <Applications /> : null}
			</div>
		</div>
	);
	return <li>{renderDescription}</li>;
};

export default JobCard;
