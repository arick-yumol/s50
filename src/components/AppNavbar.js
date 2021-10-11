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

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import { Navbar, Nav } from 'react-bootstrap';

export default function AppNavbar() {
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
}


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