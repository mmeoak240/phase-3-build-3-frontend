import React, { useState } from "react";
import EditForm from "./EditForm";

const JobCard = ({ job, deleteJob, applications, handleUpdateJob }) => {
	const { title, position, employment_type, education_level, id } = job;

	const [isEditing, setIsEditing] = useState(false);

	const handleDelete = () => {
		deleteJob(id);
		fetch(`http://localhost:9292/jobs/${id}`, {
			method: "DELETE",
		});
	};

	// const handleApplicationUpdate = (updatedApplication) => {
	// 	setIsEditing(false);
	// 	onUpdateApplication(updatedApplication);
	// };

	const displayApplications = applications.map((application) => {
		return (
			<div>
				<p>
					{application.name} - {application.email}
				</p>
			</div>
		);
	});

	return (
		<div id={id}>
			<h5>{title}</h5>
			<p>
				<strong>Position:</strong> {position}
				<div></div>
				<strong>Employment Type:</strong> {employment_type}
				<div></div>
				<strong>Education needed:</strong> {education_level}
				<div></div>
				<button onClick={handleDelete}>Filled</button>
			</p>
			{displayApplications}
			<EditForm handleUpdateJob={handleUpdateJob} />
		</div>
	);
};

export default JobCard;
