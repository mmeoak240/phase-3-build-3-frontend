import React, { useState } from "react";
import EditForm from "./EditForm";

const JobCard = ({ job, deleteJob, applications, handleUpdateJob }) => {
	const { title, position, employment_type, education_level, id } = job;

	const [formData, setFormData] = useState({
		title: "",
		position: "",
		employment_type: "",
		education_level: "",
	});

	const handleDelete = () => {
		deleteJob(id);
		fetch(`http://localhost:9292/jobs/${id}`, {
			method: "DELETE",
		});
	};

	function onUpdateForm(e, formData) {
		e.preventDefault();

		fetch(`http://localhost:9292/jobs/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((resp) => resp.json())
			.then((updatedJob) => {
				handleUpdateJob(updatedJob);
			});
	}

	// const handleApplicationUpdate = (updatedApplication) => {
	// 	setIsEditing(false);
	// 	onUpdateApplication(updatedApplication);
	// };

	const displayApplications = applications.map((application) => {
		return (
			<div key={application.id}>
				<p>
					{application.name} - {application.email}
				</p>
			</div>
		);
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	const editForm = (
		<form className="edit" onSubmit={(e) => onUpdateForm(e, formData)}>
			<label className="edit">Title</label>
			<input
				className="edit"
				id="title"
				type="text"
				onChange={handleChange}
				value={formData.title}
			/>
			<label className="edit">Position</label>
			<input
				className="edit"
				id="position"
				type="text"
				onChange={handleChange}
				value={formData.position}
			/>
			<label className="edit">Employment Type</label>
			<input
				className="edit"
				id="employment_type"
				type="text"
				onChange={handleChange}
				value={formData.employment_type}
			/>
			<label className="edit">Education Level</label>
			<input
				className="edit"
				id="education_level"
				type="text"
				onChange={handleChange}
				value={formData.education_level}
			/>
			<button className="create-button" type="submit">
				Submit
			</button>
		</form>
	);

	return (
		<div key={id}>
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
			{editForm}
		</div>
	);
};

export default JobCard;
