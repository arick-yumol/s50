// Bootstrap
import { Button, Row, Col, Card } from 'react-bootstrap';

export default function CourseCard () {
	return (
		<Row>
			<Col>
				<Card className="mt-3">
					<Card.Body>
						<Card.Title><h5><strong>Sample Course</strong></h5></Card.Title>
						<Card.Text>
							<h6><strong>Description:</strong></h6>
							<p>Pariatur aliquip nulkla exercitation enim reprehenderit aliquip. Magna dolor voluptate labore veniam. Consectetur veniam commodo cillum id do ut cillum culpa. Nulla sit voluptate tempor est cupidatat amet nisi qui commodo sit reprehenderit. Sit enim anim anim officia commodo execitation sit deserunt ipsum voluptate. Dolor ullamco do tempor irure.</p>
							<h6><strong>Price:</strong></h6>
							<p>PhP: 40,000</p>
							<Button variant="primary">Enroll</Button>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}