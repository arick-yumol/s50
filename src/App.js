// Import React from 'react';
// Alternative
// import { Fragment } from 'react';	// <React.Fragment> to enclose components into a parent element to avoid errors
import { useState, useEffect } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
// pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
import SpecificCourse from './pages/SpecificCourse';
// routing components
import { BrowserRouter as Router } from 'react-router-dom';	// will synchronize URL that will be shown in the web browser
import { Route, Switch } from 'react-router-dom';	// switch will declare the routes

// Bootstrap
import { Container } from 'react-bootstrap';
// React Context
import UserContext from './UserContext';
// import UserProvider from './UserContext';	// alternative


/*
BrowserRouter component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser

Switch component then declares with Route we can go to

Route component will render component within the switch container based on the defined route

exact property disables the partiak matching for a route makes sure that it only returns the route if the path is an exact match to the current url

If the exact and path is missing, the Route component will make it undefined route and will be loaded into a specified component

*/

/*
React Context is a global state to the app. It is a way to make a particular data available to all the components no matter how they are nested. Context helps you to broadcast the data and changes happening to that data to all components.
*/


function App() {	// main function

	// add a state hook for user,
	// The .getItem() method returns value of the specified storage object item
	// const [user, setUser] = useState({email: localStorage.getItem('email')})
	const [user, setUser] = useState({
		accessToken: localStorage.getItem('accessToken'),
		email: localStorage.getItem('email'),
		isAdmin: localStorage.getItem('isAdmin') === 'true'
	})

	// Function for clearing localStorage on logout
	const unsetUser = () => {
		localStorage.clear()
	}

	// Used to check if the user information is properly stored upon login and localStorage information is cleared upon logout. This is optional
	useEffect(() => {
		console.log(user);
		console.log(localStorage);
	}, [user])

	// Provider Component that allows consuming components to subscribe to context changes
    return(	// return jsx
    	// <UserProvider value={ {user, setUser, unsetUser} }></UserProvider>	// alternative
    	<UserContext.Provider value={ {user, setUser, unsetUser} }>
		    <Router>
		        < AppNavbar />
		        <Container>
		            <Switch>
			            < Route exact path="/" component={Home} />
			            < Route exact path="/courses" component={Courses} />
			            < Route exact path="/courses/:courseId" component={SpecificCourse}/>
			            < Route exact path="/register" component={Register} />
		            	< Route exact path="/login" component={Login} />
		            	< Route exact path="/logout" component={Logout} />
		            	{/*< Route path="/" component={Error} />*/}
		            	< Route component={Error} />
		            </Switch>
		        </Container>
		    </Router>
        </UserContext.Provider>
    );
}

export default App;

/*
NOTES:
when multiple components are inserted it must be inside a parent (React.Fragment)
With the React Fragment component, we can group multiple components and avoid using adding extra code

<Fragment> is preferred over the <></> (shortcut syntax) because it not universal and can cause problems in some other text editors.


JSX Syntax
JSX, or Javascript XML is an extension to the syntax of JS. It allows us to write HTML-like syntax within our ReactJS projects and it includes JS features as well.
Install the Js(Babel) linting for code readability
1. Ctrl + Shift + P
2. In the input field, type the word "install" and select the "Package Control: Install Package" option to trigger an installation of an add-on feature
3. Type "babel" in the input field to be installed
4. Install "babel" and "babel snippets"

*/