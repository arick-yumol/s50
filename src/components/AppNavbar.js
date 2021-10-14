// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Fragment, useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// React Context
import UserContext from '../UserContext';

export default function AppNavbar() {

	const { user } = useContext(UserContext)

	// let rightNav = (user.email !== null) ?
	let rightNav = (user.accessToken !== null) ?
		<Fragment>
			<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
		</Fragment>
		:
		<Fragment>
			<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
			<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
		</Fragment>
		

	return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">Zuit Booking System</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={NavLink} to="/">Home</Nav.Link>
					<Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					{rightNav}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}



/*export default AppNavbar = (() => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Zuit Booking System</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#courses">Courses</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
})*/





// Rendering
// Mounting
/*export default class AppNavbar extends Component() {
	return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Zuit Booking System</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#courses">Courses</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}*/