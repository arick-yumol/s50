// Bootstrap
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

export default function Banner() {
	return(
		<Row>
			<Col className="mt-3">
				<Jumbotron>
					<h1>Zuitt Coding Bootcamp</h1>
					<p>Opportunities for everyone, everywhere.</p>
					<Button variant="primary">Enroll Now!</Button>
				</Jumbotron>
			</Col>
		</Row>
	)
}