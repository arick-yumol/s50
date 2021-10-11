import { Fragment } from 'react';


export default function Welcome (props) {	// search about props
	return(
		<Fragment>
			<h1>Hello, {props.kahitAno}. Age: {props.age}</h1>
			<p>Welcome to our Course Booking</p>
		</Fragment>
	)
}