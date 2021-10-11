// Import React from 'react';
// Altenative
import { Fragment } from 'react';	// <React.Fragment> to enclose components into a parent element to avoid errors
import './App.css';
import AppNavbar from './components/AppNavbar';
// pages
import Home from './pages/Home'

// Bootstrap
import { Container } from 'react-bootstrap';

function App() {	// main function
    return (	// return jsx
        <Fragment>
            <AppNavbar />
            <Container>
                <Home />
            </Container>
        </Fragment>
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