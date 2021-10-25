import { useState, useEffect, Fragment } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function AdminView (props) {

	const { coursesData, fetchData } = props
	console.log(props)
	const [courses, setCourses] = useState([])

	// Add state for addCourse
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	// States to our modals if it needs to open/close
	const [showAdd, setShowAdd] = useState(false);
	// States for our editCourse modals
	const [showEdit, setShowEdit] = useState(false);

	// Add a state for courseId for the fetch URL in openEdit() function
	const [courseId, setCourseId] = useState('');
	
	// Functions to handle opening and closing of our Add New Course Modal
	const openAdd = () => setShowAdd(true);
	const closeAdd = () => setShowAdd(false);

	// Function to handle closing of our Edit Course Modal. We need to reset all relevent states back to their default values.
	const closeEdit = () => {
		setShowEdit(false)
		setName('')
		setDescription('')
		setPrice(0)
	};

	const openEdit = (courseId) =>{
		fetch(`http://localhost:4000/courses/${ courseId }`)
		.then(res => res.json())
		.then(data => {
			// Populate all input values with the course information that we fetched
			setCourseId(data._id)
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})

		// Then, open the modal
		setShowEdit(true)
	}

	useEffect(() => {
		const coursesArr = coursesData.map(course => {
			return(
				<tr key={course._id}>	// used to keep track
					<td>{course._id}</td>
					<td>{course.name}</td>
					<td>{course.description}</td>
					<td>{course.price}</td>
					<td className={course.isActive ? "text-success" : "text-danger"}>
						{course.isActive ? "Available" : "Unavailable"}
					</td>
					<td>
						<Button variant="primary" size="sm" onClick={() => openEdit(course._id)}>Update</Button>
						{course.isActive ?
							<Button variant="danger" size="sm" onClick={() => archiveToggle(course._id, course.isActive)}>Disable</Button>
							:
							<Button variant="success" size="sm" onClick={() => activateToggle(course._id, course.isActive)}>Enable</Button>
						}
					</td>
				</tr>
			)
		})
		setCourses(coursesArr)
	}, [coursesData])


	// Add New Course function
	const addCourse = (e) => {
		e.preventDefault();

		fetch('http://localhost:4000/courses/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if (data === true) {
				// Run our fetchData() function that we passed from our parent component, in order to re-render our page
				fetchData()

				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'Course successfully added.'
				})
				setName('')
				setDescription('')
				setPrice(0)

				closeAdd();// automatically closes the modal
				// window.location.reload();	// without this, need to refresh the page in order for the add course to render. this looks like a hard refresh when added.
			}
			else {
				Swal.fire({
					title: 'Something Went Wrong!',
					icon: 'error',
					text: 'Please Try Again.'
				})
			}
		})
	}


	// Edit Course Function
	const editCourse = (e, courseId) => {
		e.preventDefault();	// prevents the default behavior of refreshing the page

		// this courseId has values from courseId in openEdit() function
		fetch(`http://localhost:4000/courses/${ courseId }`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {
			if (data === true) {
				fetchData()
				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'Course successfully updated'
				})
				closeEdit()
			}
			else {
				fetchData()
				Swal.fire({
					title: 'Something Went Wrong!',
					icon: 'error',
					text: 'Please try again'
				})
			}
		})
	}

	// Archive/Disable a course
	const archiveToggle = (courseId, isActive) => {
		fetch(`http://localhost:4000/courses/${ courseId }/archive`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				isActive: isActive
			})
		})
		.then(res => res.json())
		.then(data => {
			if (data === true) {
				fetchData()
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Course successfully disabled'
				})
			}
			else {
				fetchData()
				Swal.fire({
					title: 'Something Went Wrong',
					icon: 'error',
					text: 'Please Try again'
				})
			}
		})
	}

	// Unarchive/enable a course
	const activateToggle = (courseId, isActive) => {
		fetch(`http://localhost:4000/courses/${ courseId }/activate`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				isActive: isActive
			})
		})
		.then(res => res.json())
		.then(data => {
			if (data === true) {
				fetchData()
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Course successfully enabled'
				})
			}
			else {
				fetchData()
				Swal.fire({
					title: 'Something Went Wrong',
					icon: 'error',
					text: 'Please Try again'
				})
			}
		})
	}

	return(
		<Fragment>
			<div className="text-center my-4">
				<h2>Admin Dashboard</h2>
				<div className="d-flew justify-content-center">
					<Button variant="primary" onClick={openAdd}>Add New Course</Button>
				</div>
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

			{/*ADD NEW COURSE MODAL*/}

			<Modal show={showAdd} onHide={closeAdd}>
				<Form onSubmit={e => addCourse(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Course</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name:</Form.Label>
							<Form.Control type="text" value={name} onChange={e=> setName(e.target.value)} required />
						</Form.Group>

						<Form.Group>
							<Form.Label>Description:</Form.Label>
							<Form.Control type="text" value={description} onChange={e=> setDescription(e.target.value)} required />
						</Form.Group>

						<Form.Group>
							<Form.Label>Price:</Form.Label>
							<Form.Control type="number" value={price} onChange={e=> setPrice(e.target.value)} required />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeAdd}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>
			</Modal>

			{/*EDIT COURSE MODAL*/}
			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editCourse(e, courseId)}>
					<Modal.Header closeButton>
						<Modal.Title>Update Course</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name:</Form.Label>
							<Form.Control type="text" value={name} onChange={e=> setName(e.target.value)} required />
						</Form.Group>

						<Form.Group>
							<Form.Label>Description:</Form.Label>
							<Form.Control type="text" value={description} onChange={e=> setDescription(e.target.value)} required />
						</Form.Group>

						<Form.Group>
							<Form.Label>Price:</Form.Label>
							<Form.Control type="number" value={price} onChange={e=> setPrice(e.target.value)} required />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>
			</Modal>


		</Fragment>
	)
}

/*import { useState, useEffect, Fragment } from 'react';
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
}*/