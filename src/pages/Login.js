import { useState, useEffect, Fragment, useContext } from 'react';	// useContext unwraps the contents of the UserContext
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
// React Context
import UserContext from '../UserContext';

export default function Login () {
	// useContext is a react hook used to unwrap our context. It will return the data passed as values by a provider (UserContext.Provider component in App.js)
	const { user, setUser } = useContext(UserContext)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [loginButton, setLoginButton] =useState(false)


	useEffect(() => {
		if (email !== '' && password !== '') {
			setLoginButton(true)
		}
		else {
			setLoginButton(false)
		}
	}, [email, password])


	function login (e) {
		e.preventDefault()

		Swal.fire({
			title: "Yaaaaay!",
			icon: "success",
			text: "Successfully logged in!"
		})
		// local storage allows us to save data within our browsers as strings
		// The .setItem() method of the Storage interface, when passed a key name and value, will add that key to the given storage object, or update the key's value if it already exists
		// setItem is used to sotre data in the localStorage as a string
		// setItem('key', value)
		localStorage.setItem('email', email);
		setUser({ email: email })

		setEmail('')
		setPassword('')
	}

	return(
		<Fragment>
			<h1>Login</h1>
			<Form onSubmit={(e) => login(e)}>
				<Form.Group>
					<Form.Label>Email Address:</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email here"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password:</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter your password here"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				{loginButton ?
					<Button variant="primary" type="submit">Submit</Button>
					:
					<Button variant="primary" type="submit" disabled>Submit</Button>
				}
			</Form>
		</Fragment>
	)
}


/*import { Fragment, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	console.log(email);
	console.log(password);

	useEffect(() => {
		if (email !== '' && password !== '') {
			setIsLogged(true)
		}
		else {
			setIsLogged(false)
		}
	}, [email, password])

	function loginUser (e) {
		e.preventDefault();

		setEmail('');
		setPassword('');

		alert('User has successfully logged in!')
	}

	return(
		<Fragment>
			<h1>Login</h1>
			<Form onSubmit={(e) => loginUser(e)}>
				<Form.Group>
					<Form.Label>Email address:</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email address"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password:</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				{isLogged ?
					<Button variant="primary" type="submit">
					Submit
					</Button>
					:
					<Button variant="primary" type="submit" disabled>
					Submit
					</Button>
				}
			</Form>
		</Fragment>
	)
}*/