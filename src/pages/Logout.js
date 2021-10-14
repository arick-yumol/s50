import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';


export default function Logout () {

	const { setUser, unsetUser } = useContext(UserContext);

	// Cleasr the localStorage of the user's information
	unsetUser();

	// Placing the 'setUser' setter function inside of a useEffect is necessary because of updates within React JS that a state of another component cannot be updated while trying to render a different component
	// By adding the useEffect, this will allow the Logout page to render first before triggering the useEffect which changes the state of our user.
	useEffect(() => {
		// Set the user state back to it's original value
		// setUser({ email: null })
		setUser({ accessToken: null })
	}, [])	// empty array means initial rendering (single render only). if with variable (updates every render)
	// the array in our useEffect provide initial rendering only. Once lang siya mag-re-render

	return(
		// Redirect back to login
		< Redirect to="/login"/>
	)
}