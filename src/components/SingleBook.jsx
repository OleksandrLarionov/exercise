import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Component } from 'react';
class SingleBook extends Component {
	// console.log(props.book);
	state = {
		selected: false,
	};

	render() {
		return (
			<Container>
				<Row>
					<Col md={3} key={this.props.book.asin}>
						<Card
							className={
								this.state.selected ? 'border border-warning border-4' : 'border-none'
							}
							onClick={() => {
								this.setState({ selected: !this.state.selected });
							}}>
							<Card.Img variant='top' src={this.props.book.img} height={400} />
							<Card.Body className='justify-content-between d-flex flex-column'>
								<Card.Title>{this.props.book.title}</Card.Title>
								<Card.Text>{this.props.book.category}</Card.Text>
								<Button variant='primary'>Buy</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SingleBook;
