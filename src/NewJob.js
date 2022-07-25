import React, { useState } from "react";

const NewJob = ({ handleSubmit }) => {
	const [formData, setFormData] = useState({
		title: "",
		position: "",
		employmentType: "",
		educationLevel: "",
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
					id="trailName"
					type="text"
					onChange={handleChange}
					value={formData.position}
				/>
				<label className="create">Employment Type</label>
				<input
					className="create"
					id="location"
					type="text"
					onChange={handleChange}
					value={formData.employmentType}
				/>
				<label className="create">Education Level</label>
				<input
					className="create"
					id="difficulty"
					type="text"
					onChange={handleChange}
					value={formData.educationLevel}
				/>
				<button className="create-button" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default NewJob;
