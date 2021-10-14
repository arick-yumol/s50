import { Fragment, useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';	// npm install sweetalert2 in CLi. totally optional (just a visual enhancement of the normal alert)
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Register () {
	const { user } = useContext(UserContext);

	// State hooks to store the values of the input fields
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [isActive, setIsActive] = useState(false);

	// Check if values are successfully binded
	console.log(email);
	console.log(password1);
	console.log(password2);

	useEffect(() => {
		// Validation to enable submit button when all fields are populated and both passwords match
		if ((email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)) {	// 1st condition checks if all fields are filled while 2nd condition checks if both passwords are the same
			setIsActive(true)
		}
		else {
			setIsActive(false)
		}
	}, [email, password1, password2])	// getters needed to be returned for updates

	function registerUser (e) {	// e also known as 'even object' discussed in DOM
		e.preventDefault();	// prevents default behavior (look up previous lessons)
		// to clear out the data in our input fields
		setEmail('')	// without this email value will persist
		setPassword1('')	// without this password1 value will persist
		setPassword2('')	// without this password2 value will persist

		// alert('Thank you for registering!')	// this is the normal alert
		Swal.fire({
			title: 'Yaaaaaaaaaaaaaaay!!!!',
			icon: 'success',
			text: 'Thank you for registering!'
		})
	}

	// Two way binding
	// The values in the fields of the form is bound to the getter of the state and the event is bound to the setter. This is called two way binding
	// The data we changed in the view has updated the state
	// The data in the state has updated the view

	return(
		// (user.email !== null) ?
		(user.accessToken !== null) ?
		< Redirect to="/"/>
			:
			<Fragment>
				<h1>Register</h1>
				<Form onSubmit={(e) => registerUser(e)}>
					<Form.Group>
						<Form.Label>Email address:</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}	// the e.target.value property allows us to gain acces to the input field's current value to be used when submitting form data
							required
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter your Password"
							value={password1}
							onChange={e => setPassword1(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Verify Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Verify your Password"
							value={password2}
							onChange={e => setPassword2(e.target.value)}
							required
						/>
					</Form.Group>

					{isActive ?
						<Button variant="primary" type="submit" id="submitBtn">
						Submit
						</Button>
						:
						<Button variant="primary" type="submit" id="submitBtn" disabled>
						Submit
						</Button>
					}
				</Form>
			</Fragment>
	)
}

// <Form.Control /> is the React counterpart of <input></input> in HTML