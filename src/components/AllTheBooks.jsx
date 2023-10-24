import { Row, Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Component } from 'react';
// Genere dei libri
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class AllTheBooks extends Component {
	state = {
		genreFantasy: fantasy[0],
		genreHistory: history[0],
		genreRomance: romance[0],
		genreHorror: horror[0],
		genreScifi: scifi[0],
	};

	render() {
		return (
			<Container>
				<button
					onClick={(e) => {
						console.log('yo', e.button);

						this.setState({
							genreFantasy: fantasy[e.button],
						});
					}}>
					Fantasy
				</button>
				<Row>
					{horror.map((book) => {
						return (
							<Col md={3} key={book.asin}>
								<Card className='h-100'>
									<Card.Img variant='top' src={book.img} height={400} />
									<Card.Body className='justify-content-between d-flex flex-column'>
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
	}
}

export default AllTheBooks;
