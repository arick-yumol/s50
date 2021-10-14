import { useState, useEffect, Fragment } from 'react';
import CourseCard from './CourseCard';


export default function UserView ({ coursesData }) {
	const [courses, setCourses] = useState([])

	useEffect(() => {

		const coursesArr = coursesData.map(course => {
			// only render active courses
			if (course.isActive === true) {
				return(
					< CourseCard courseProp={course} key={course._id}/>
				)
			}
			else {
				return null;
			}
		})
		// set the courses state to the result of our map function, to bring our returned course components outside of the scope of our useEffect() where our return statement below can see it
		setCourses(coursesArr)

	}, [coursesData])

	return(
		<Fragment>
			{courses}
		</Fragment>
	)
}