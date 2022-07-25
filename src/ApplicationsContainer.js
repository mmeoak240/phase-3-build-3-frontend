import Applications from "./Applications";

const ApplicationsContainer = ({ setApplications, applications }) => {
	return (
		<div>
			{applications.map((application) => (
				<Applications
					application={application}
					setApplications={setApplications}
					key={application.id}
				/>
			))}
		</div>
	);
};

export default ApplicationsContainer;
