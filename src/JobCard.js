const JobCard = ({ job, deleteJob }) => {
	const { title, position, employment_type, education_level, id } = job;

	const handleDelete = () => {
		deleteJob(id);
		fetch("http://localhost:9292/jobs/${id}", {
			method: "DELETE",
		});
	};

	const renderDescription = (
		<div>
			<div>
				<ul>
					<h5>{title}</h5>
					<strong>Position:</strong> {position}
					<p></p>
					<strong>Employment Type:</strong> {employment_type}
					<p></p>
					<strong>Education needed:</strong> {education_level}
					<p></p>
					<button onClick={handleDelete}>Delete</button>
				</ul>
			</div>
		</div>
	);
	return <li>{renderDescription}</li>;
};

export default JobCard;
