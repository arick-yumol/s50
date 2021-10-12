import { Fragment } from 'react';
import courseData from '../data/courseData';
import CourseCard from '../components/CourseCard';


export default function Courses () {
	// Checks to see if the mock data was captured
	console.log(courseData)
	console.log(courseData[0])

	// for us to be able to display all the courses from the data file, we are going to use the map()
	// The .map() method loops through the individual course objects in our array and returns a component for each course

	// Multiple components created through the .map() method must have a UNIQUE KEY that will help ReactJS to identify which /elements have been changed, added or removed
	// key={course.id} = to keep track the data of courses
	// .map() method must always have a key for identification of every component inside the array
	const courses = courseData.map(course => {	// displays all courseData available in the database
		return(
			<CourseCard key={course.id} courseProp={course} />
		)
	})


	return(
		<Fragment>
			<h1>Courses</h1>
			{/*<CourseCard courseProp={courseData[0]} />*/}
			{courses}
		</Fragment>
	)
}