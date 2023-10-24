import { Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../data/fantasy.json';
import '../data/history.json';
import horror from '../data/horror.json';
import '../data/romance.json';
import '../data/scifi.json';
import { Container } from 'react-bootstrap';

const AllTheBooks = () => {
	return (
		<Container>
			<Row>
				{horror.map((book) => {
					return (
						<Col md={2}>
							<Card key={book.asin}>
								<Card.Img variant='top' src={book.img} />
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<Card.Text>{book.category}</Card.Text>
									<Button variant='primary'>Buy</Button>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default AllTheBooks;
