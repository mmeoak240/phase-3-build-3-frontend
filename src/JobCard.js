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
				<p>
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
				</p>
				<div>{showApp ? <Applications /> : null}</div>
			</div>
		</div>
	);
	return <li>{renderDescription}</li>;
};

export default JobCard;
