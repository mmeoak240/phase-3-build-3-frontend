import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<nav style={{ textAlign: "center", background: "#49fb35" }}>
				<NavLink style={{ marginRight: "30px", fontSize: "20px" }} to="/">
					Home
				</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
