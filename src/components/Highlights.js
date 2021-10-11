// Bootstrap
import { Row, Col, Card } from 'react-bootstrap';



export default function Highlights () {
	return(
		<Row>
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title><h2>Learn from Home</h2></Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aligqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco labors nisi ut aliquip ex ea commodo
							consequat Duis aute irure dolor in reprenhenderit in voltate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupdatat non
							proident, sunt in culpa qui officia deseunt mollit anim id est laborum.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title><h2>Study Now, Pay Later</h2></Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aligqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco labors nisi ut aliquip ex ea commodo
							consequat Duis aute irure dolor in reprenhenderit in voltate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupdatat non
							proident, sunt in culpa qui officia deseunt mollit anim id est laborum.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title><h2>Be Part of Our Community</h2></Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aligqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco labors nisi ut aliquip ex ea commodo
							consequat Duis aute irure dolor in reprenhenderit in voltate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupdatat non
							proident, sunt in culpa qui officia deseunt mollit anim id est laborum.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}