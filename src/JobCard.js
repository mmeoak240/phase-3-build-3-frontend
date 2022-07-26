import React, { useState } from "react";
import Applications from "./Applications";

const JobCard = ({ job, deleteJob, applications }) => {
	const { title, position, employment_type, education_level, id } = job;

	const [showApp, setShowApp] = useState(false);

	const handleDelete = () => {
		deleteJob(id);
		fetch(`http://localhost:9292/jobs/${id}`, {
			method: "DELETE",
		});
	};

	// const displayApplications = applications.map((application) => {
	// 	<Applications application={application} />;
	// });

	const renderDescription = (
		<div>
			<div>
				<h5>{title}</h5>
				<p>
					<strong>Position:</strong> {position}
					<div></div>
					<strong>Employment Type:</strong> {employment_type}
					<div></div>
					<strong>Education needed:</strong> {education_level}
					<div></div>
					<button onClick={handleDelete}>Filled</button>
					<button onClick={() => setShowApp((showApp) => !showApp)}>
						{showApp ? "Hide" : "Applications"}
					</button>
				</p>
				<p>{showApp ? <Applications /> : null}</p>
			</div>
		</div>
	);
	return <li>{renderDescription}</li>;
};

export default JobCard;
