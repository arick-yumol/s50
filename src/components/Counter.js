import { useState, useEffect, Fragment } from 'react';
import { Button } from 'react-bootstrap';
// What does useEffect do? By using this hook, you tell React that your component/elements needs to do something after render. React will remember the function you passed (we'll refer to it as our 'side-effect') and call it later after performing the DOM updates

// Syntax of useEffect
/*
useEffect(() => {}, [])
*/


/*
useEffect allows us to perform tasks/function on initial render:
	-when the component is displayed for the first time

What allows us to control when our useEffect will run AFTER the inital render?
	-we add an optional dependency ARRAY to control when useEffect will run, instead that it runs on initial render AND when states are updated, we can control the useEffect to run only when the state/s in the dependency array is updated.
*/

export default function Counter () {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = `You clicked ${count} times`
	},
	[count]	// the empty array [] prevents an infinite loop. when [count] the useState will be updated together with the side-effect from the useEffect
	)

	return(
		<Fragment>
			<p>You clicked {count}</p>
			<Button variant="primary" onClick={() => setCount(count + 1)}> Click me </Button>
		</Fragment>
	)
}