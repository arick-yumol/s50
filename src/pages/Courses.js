// import { Fragment } from 'react';
// import courseData from '../data/courseData';
// import CourseCard from '../components/CourseCard';

import { useState, useEffect, useContext } from 'react';

// bootstrap
import { Container } from 'react-bootstrap';
// components
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
// React Context
import UserContext from '../UserContext';

export default function Courses () {
	// // Checks to see if the mock data was captured
	// console.log(courseData)
	// console.log(courseData[0])

	// // for us to be able to display all the courses from the data file, we are going to use the map()
	// // The .map() method loops through the individual course objects in our array and returns a component for each course

	// // Multiple components created through the .map() method must have a UNIQUE KEY that will help ReactJS to identify which /elements have been changed, added or removed
	// // key={course.id} = to keep track the data of courses
	// // .map() method must always have a key for identification of every component inside the array
	// const courses = courseData.map(course => {	// displays all courseData available in the database
	// 	return(
	// 		<CourseCard key={course.id} courseProp={course} />
	// 	)
	// })


	// return(
	// 	<Fragment>
	// 		<h1>Courses</h1>
	// 		{/*<CourseCard courseProp={courseData[0]} />*/}
	// 		{courses}
	// 	</Fragment>
	// )


	const { user } = useContext(UserContext);

	const [allCourses, setAllCourses] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/courses/all')
		// , {
		//  method: GET	// default is GET
		// })
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setAllCourses(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return(
		<Container>
			{
				(user.isAdmin === true) ?
				<AdminView coursesData={allCourses}/>
				:
				<UserView coursesData={allCourses}/>
			}
		</Container>
	)
}