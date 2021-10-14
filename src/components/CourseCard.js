// Totally de-structered
// Bootstrap
import { useState, useEffect } from 'react';
// import { Button, Row, Col, Card } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';	// comes from 'react'

export default function CourseCard ({courseProp}) {

	// checks to see if the data was successfully passed
	// console.log(props)
	// console.log(typeof props)

	// Deconstruct the course properties into their own variables (destructuring)
	const { name, description, price } = courseProp;

	// Use the state hooks for this component to be able to store its state
	// States are used to keep track of information related to individual component
	// Syntax
		// const [getter, setter] = useState(initialGetterValue)
		// getter = stored initial(default value)
		// setter = updated value;
	const [count, setCount] = useState(0)
	// const [count, setCount] = useState("kahit Ano")	// will display "kahit Ano" as the count. useState() accepts: number, string, boolean, etc.(?)
	const [seats, setSeats] = useState(10)

	// state hook that indicates the button for enrollment
	const [isOpen, setIsOpen] = useState(true)

	useEffect(() => {
		if (seats === 0) {
			setIsOpen(false);
		}
	}, [seats])

	// console.log(useState(0))

	/*function enroll () {
		setCount(count + 1);
		console.log('Enrollees: ' + count);
	}*/

	 // ES6 arrow function works
	const enroll = () => {
		if (seats > 0) {
			setCount(count + 1);
			console.log('Enrollees: ' + count);
			setSeats(seats - 1);
			console.log('Seats:' + seats)
		}
		else {
			alert('Maximum number of seats have been reached')
		}
	}

	/*return(
		<Row>
			<Col>
				<Card className="mt-3">
					<Card.Body>
						<Card.Title><h5><strong>{name}</strong></h5></Card.Title>
						<Card.Text>
							<h6><strong>Description:</strong></h6>
							<p>{description}</p>
							<h6><strong>Price:</strong></h6>
							<p>PhP: {price}</p>
						</Card.Text>
						<Card.Text>Enrollees: {count}</Card.Text>
						<Card.Text>Seats available: {seats}</Card.Text>
						{isOpen ? 
							<Button variant="primary" onClick={enroll}>Enroll</Button> :
							<Button variant="primary" disabled>Enroll</Button>
						}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)*/

	return(
		<Card>
			<Card.Body>
				<Card.Title><h2>{name}</h2></Card.Title>
				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text>{description}</Card.Text>
				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>Php {price}</Card.Text>
				<Card.Text>Enrollees: {count}</Card.Text>
				<Card.Text>Seats: {seats}</Card.Text>
				{isOpen ? 
				<Button variant="primary" onClick={enroll}>Enroll</Button>
				:
				<Button variant="primary" disabled>Enroll</Button>
				}

			</Card.Body>
		</Card>

	)
}

// Check if the CourseCard Component is getting the correct prop types
// Prop-types are used for validating information passed to a component and is a tool normally used to help develops ensure the correct information is passed from one component to the next
CourseCard.propTypes = {
	// The .shape() method is used to check if a prop object conforms to a specific 'shape'
	courseProp: PropTypes.shape({
		// define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}

/*
mounting > updating > unmounting
mounting > rendering > re-rendering > unmounting

login page (mounting) > typing data in inputs (rendering) (re-rendering)
*/


/*// First de-structured form
// Bootstrap
import { Button, Row, Col, Card } from 'react-bootstrap';

export default function CourseCard ({courseProp}) {

	// checks to see if the data was successfully passed
	// console.log(props)
	// console.log(typeof props)

	return(
		<Row>
			<Col>
				<Card className="mt-3">
					<Card.Body>
						<Card.Title><h5><strong>{courseProp.name}</strong></h5></Card.Title>
						<Card.Text>
							<h6><strong>Description:</strong></h6>
							<p>{courseProp.description}</p>
							<h6><strong>Price:</strong></h6>
							<p>PhP: {courseProp.price}</p>
							<Button variant="primary">Enroll</Button>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}*/


/*// Non de-structered form
// Bootstrap
import { Button, Row, Col, Card } from 'react-bootstrap';

export default function CourseCard (props) {

	// checks to see if the data was successfully passed
	console.log(props)
	console.log(typeof props)

	return(
		<Row>
			<Col>
				<Card className="mt-3">
					<Card.Body>
						<Card.Title><h5><strong>{props.courseProp.name}</strong></h5></Card.Title>
						<Card.Text>
							<h6><strong>Description:</strong></h6>
							<p>{props.courseProp.description}</p>
							<h6><strong>Price:</strong></h6>
							<p>PhP: {props.courseProp.price}</p>
							<Button variant="primary">Enroll</Button>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}*/

/* Ma'am Judy Lyn Medalla's code
return(
	<Card>
		<Card.Body>
			<Card.Title><h2>Sample Course</h2></Card.Title>
			<Card.Subtitle>Description:</Card.Subtitle>
			<Card.Text>This is a sample course offering.</Card.Text>
			<Card.Subtitle>Price:</Card.Subtitle>
			<Card.Text>Php 40,000</Card.Text>
		</Card.Body>
	</Card>
)
*/