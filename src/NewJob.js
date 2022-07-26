import React, { useState } from "react";

const NewJob = ({ handleSubmit }) => {
	const [formData, setFormData] = useState({
		title: "",
		position: "",
		employment_type: "",
		education_level: "",
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	return (
		<>
			<h1 id="formHeading" className="create">
				Create Job
			</h1>
			<form
				className="create"
				onSubmit={(e) => handleSubmit(e, formData, setFormData)}
			>
				<label className="create">Title</label>
				<input
					className="create"
					id="title"
					type="text"
					onChange={handleChange}
					value={formData.title}
				/>
				<label className="create">Position</label>
				<input
					className="create"
					id="position"
					type="text"
					onChange={handleChange}
					value={formData.position}
				/>
				<label className="create">Employment Type</label>
				<input
					className="create"
					id="employment_type"
					type="text"
					onChange={handleChange}
					value={formData.employment_type}
				/>
				<label className="create">Education Level</label>
				<input
					className="create"
					id="education_level"
					type="text"
					onChange={handleChange}
					value={formData.education_level}
				/>
				<button className="create-button" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default NewJob;
