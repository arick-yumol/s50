import { Fragment, useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';	// npm install sweetalert2 in CLi. totally optional (just a visual enhancement of the normal alert)
import { Redirect, useHistory } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Register () {
	const history = useHistory();
	const { user } = useContext(UserContext);

	// // State hooks to store the values of the input fields
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('');
	// // const [password1, setPassword1] = useState('');
	// const [password2, setPassword2] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [mobileNo, setMobileNo] = useState('');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	const [isActive, setIsActive] = useState(false);

	// Check if values are successfully binded
	console.log(email);
	console.log(password);
	// console.log(password1);
	console.log(password2);
	console.log(firstName);
	console.log(lastName);
	console.log(mobileNo);

	useEffect(() => {
		// Validation to enable submit button when all fields are populated and both passwords match
		// if ((email !== '' && password1 !== '' && password2 !== '' && firstName !== '' && lastName !== '' && mobileNo !== '') && (password1 === password2)) {	// 1st condition checks if all fields are filled while 2nd condition checks if both passwords are the same
		if ((firstName !== '' && lastName !== '' && email !== '' && mobileNo !== '' && password !== '' && password2 !== '') && (mobileNo.length >= 11) && (password === password2)) {	// 1st condition checks if all fields are filled while 2nd condition checks if both passwords are the same
			setIsActive(true)
		}
		else {
			setIsActive(false)
		}
	// }, [email, password1, password2, firstName, lastName, mobileNo])	// getters needed to be returned for updates
	}, [firstName, lastName, email, mobileNo, password, password2])	// getters needed to be returned for updates

	function registerUser (e) {	// e also known as 'even object' discussed in DOM
		e.preventDefault();	// prevents default behavior (look up previous lessons)
		// // to clear out the data in our input fields
		// setEmail('')	// without this email value will persist
		// setPassword1('')	// without this password1 value will persist
		// setPassword2('')	// without this password2 value will persist

		// // alert('Thank you for registering!')	// this is the normal alert
		// Swal.fire({
		// 	title: 'Yaaaaaaaaaaaaaaay!!!!',
		// 	icon: 'success',
		// 	text: 'Thank you for registering!'
		// })

		fetch('http://localhost:4000/users/checkEmail', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if (data === true) {
				Swal.fire({
					title: 'Duplicate email found',
					icon: 'error',
					text: 'Please provide a different email'
				})
			}
			else {
				fetch('http://localhost:4000/users/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						email: email,
						mobileNo: mobileNo,
						password: password
					})
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)

					if (data === true) {
						Swal.fire({
							title: 'Registration successful',
							icon: 'success',
							text: 'Welcome to Zuitt!'
						})
						history.push('/login')
					}
					else {
						Swal.fire({
							title: 'OOoooops!',
							icon: 'error',
							text: 'Registration unsuccessful'
						})
					}
				})
				setFirstName('')
				setLastName('')
				setEmail('')	// without this email value will persist
				setMobileNo('')
				setPassword('')
				// setPassword1('')	// without this password1 value will persist
				setPassword2('')	// without this password2 value will persist
			}
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
						<Form.Label>First Name:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter first name"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter last name"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							required
						/>
					</Form.Group>
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
						<Form.Label>Mobile Number:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter mobile number"
							value={mobileNo}
							onChange={e => setMobileNo(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter your Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							// value={password1}
							// onChange={e => setPassword1(e.target.value)}
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