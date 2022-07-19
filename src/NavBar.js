import { NavLink } from "react-router-dom";
import JobsContainer from "./JobsContainer";

const NavBar = () => {
	return (
		<div>
			<nav style={{ textAlign: "center", background: "#49fb35" }}>
				<NavLink style={{ marginRight: "30px", fontSize: "20px" }} to="/">
					Home
				</NavLink>
				<NavLink
					style={{ marginRight: "30px", fontSize: "20px" }}
					to="/jobslist"
				>
					Jobs
				</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
