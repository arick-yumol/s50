import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link, useHistory, useParams } from 'react-router-dom';

import UserContext from '../UserContext';


export default function SpecificCourse () {

	const { user } = useContext(UserContext);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	// useParams() contains any values we a re trying to pass in the URL stored in a key/value pair
	// useParams() is how we receive the courseId passed via the URL
	const { courseId } = useParams();

	useEffect(() => {
		fetch(`http://localhost:4000/courses/${ courseId }`)
		.then(res => res.json())
		.then(data => {
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})
	}, [])


	const enroll = (courseId) => {
		fetch('http://localhost:4000/users/enroll', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				courseId: courseId
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if (data === true) {
				Swal.fire({
					title: 'Yeeeeeeey!',
					icon: 'success',
					text: `You successfully enrolled for this course ${ name }`
				})
			}
			else {
				Swal.fire({
					title: 'Ooooooops!',
					icon: 'error',
					text: 'Something went wrong. Please try again'
				})
			}
		})

	}


	return(
		<Container>
			<Card>
				<Card.Header className="bg-dark text-white text-center pb-0">
					<h4>{name}</h4>
				</Card.Header>

				<Card.Body className="text-center">
					<Card.Text>
						{description}
					</Card.Text>
					<h6>Php {price}</h6>
				</Card.Body>

				<Card.Footer>
					{
						user.accessToken !== null ?
							<Button variant="primary" block onClick={ () => enroll(courseId) }>Enroll</Button>
						:
							<Link className="btn btn-warning btn-block" to="/login">Login to Enroll</Link>
					}

				</Card.Footer>
			</Card>
		</Container>
	)
}