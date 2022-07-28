import React, { useState } from "react";

const NewApplication = ({ handleApplicationSubmit }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	return (
		<>
			<h4 id="formHeading" className="create">
				Submit Application
			</h4>
			<form
				className="create"
				onSubmit={(e) => handleApplicationSubmit(e, formData, setFormData)}
			>
				<label className="create">Name</label>
				<input
					className="create"
					id="name"
					type="text"
					onChange={handleChange}
					value={formData.name}
				/>
				<label className="create">Email</label>
				<input
					className="create"
					id="email"
					type="text"
					onChange={handleChange}
					value={formData.email}
				/>

				<button className="create-button" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default NewApplication;
