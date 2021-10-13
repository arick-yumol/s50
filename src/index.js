import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Import the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(	// renders whatever is inside it. responsible for injecting components inside the src folder
	<React.StrictMode>	
    	<App />
	</React.StrictMode>,
	document.getElementById('root')	// this is from ../public/index.html
);

/*const name = 'John Smith'
const user = {
	firstName: 'Jasmine',
	lastName: 'Smith'
}

const formatName = (user => {
	return user.firstName + ' ' + user.lastName;
})

// function formatName(user) {
// 	return user.firstName + ' ' + user.lastName;
// }

const element = <h1>Hello, {formatName(user)} </h1>

ReactDOM.render(element, document.getElementById('root'));*/