const Applications = ({ application }) => {
	const { name, email } = application;

	return (
		<div>
			<p>
				{name} - {email}
			</p>
		</div>
	);
};

export default Applications;
