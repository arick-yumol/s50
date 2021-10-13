import { Fragment, useState, useEffect } from 'react';
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
}