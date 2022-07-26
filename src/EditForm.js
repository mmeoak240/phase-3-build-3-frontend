import React, { useState } from "react";

const EditForm = (application, onUpdateApplication) => {
	const [updatedName, setUpdatedName] = useState(application.name);
	const [updatedEmail, setUpdatedEmail] = useState(application.email);

	function handleEditForm(e) {
		e.preventDefault();
		fetch("http://localhost:9292/jobs/${id}", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: updatedName, email: updatedEmail }),
		})
			.then((resp) => resp.json())
			.then((updatedApplication) => onUpdateApplication(updatedApplication));
	}

	return (
		<form onSubmit={handleEditForm} style={{ width: 250 }}>
			<input
				id="name"
				type="text"
				name="name"
				value={updatedName}
				onChange={(e) => setUpdatedName(e.target.value)}
			/>
			<input
				id="email"
				type="text"
				name="email"
				value={updatedEmail}
				onChange={(e) => setUpdatedEmail(e.target.value)}
			/>
		</form>
	);
};

export default EditForm;
