const Applications = ({ setApplications, application }) => {
	const { name, email } = application;

	<div>
		{name} - {email}
	</div>;
};

export default Applications;
