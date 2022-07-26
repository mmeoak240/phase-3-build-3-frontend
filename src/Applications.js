const Applications = ({ setApplications, application }) => {
	const { name, email } = application;

	<div>
		<p>
			{name} - {email}
		</p>
	</div>;
};

export default Applications;
