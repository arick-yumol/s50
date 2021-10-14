import { useState, useEffect, Fragment } from 'react';
import { Table, Button } from 'react-bootstrap';

export default function AdminView (props) {

	const { coursesData } = props
	console.log(props)
	const [courses, setCourses] = useState([])

	useEffect(() => {
		const coursesArr = coursesData.map(course => {
			return(
				<tr key={course._id}>
					<td>{course._id}</td>
					<td>{course.name}</td>
					<td>{course.description}</td>
					<td>{course.price}</td>
					<td className={course.isActive ? "text-success" : "text-danger"}>
						{course.isActive ? "Available" : "Unavailable"}
					</td>
				</tr>
			)
		})
		setCourses(coursesArr)
	}, [coursesData])

	return(
		<Fragment>
			<div className="text-center my-4">
			<h2>Admin Dashboard</h2>
			</div>
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>Description</td>
						<td>Price</td>
						<td>Availability</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{courses}
				</tbody>
			</Table>
		</Fragment>
	)
}