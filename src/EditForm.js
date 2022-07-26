import React, { useState } from "react";

const EditForm = ({ onUpdateSubmit }) => {
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
			<h5 id="formHeading" className="edit">
				Edit Job
			</h5>
			<form
				className="edit"
				onSubmit={(e) => onUpdateSubmit(e, formData, setFormData)}
			>
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
		</>
	);
};

export default EditForm;

// function handleEditForm(e) {
// 	e.preventDefault();
// 	fetch("http://localhost:9292/jobs/${id}", {
// 		method: "PATCH",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ name: updatedName, email: updatedEmail }),
// 	})
// 		.then((resp) => resp.json())
// 		.then((updatedApplication) => onUpdateApplication(updatedApplication));
// }
