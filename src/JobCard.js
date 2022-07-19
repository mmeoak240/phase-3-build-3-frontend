const JobCard = ({ job }) => {
	const renderDescription = (
		<div>
			<div>
				<li>
					<h5>{job.title}</h5>
					<p>
						<strong>Position:</strong> {job.position}
					</p>
					<p>
						<strong>Education needed:</strong> {job.education_level}
					</p>
				</li>
			</div>
		</div>
	);
	return <ul>{renderDescription}</ul>;
};

export default JobCard;
