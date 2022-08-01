import React, { useState } from "react";

function NewApplication({ handleAddApplication, id }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const application = {
		name: name,
		email: email,
		job_id: id,
	};

	return (
		<div>
			<h4>Apply</h4>
			<form
				className="edit"
				onSubmit={(e) => handleAddApplication(e, application)}
			>
				<label htmlFor="amount">Name:</label>
				<input
					id="name"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default NewApplication;
