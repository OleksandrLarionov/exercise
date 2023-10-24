import ListGroup from 'react-bootstrap/ListGroup';

const ListGroupAlert = () => {
	return (
		<ListGroup horizontal className='justify-content-center mb-3'>
			<ListGroup.Item>Facebook</ListGroup.Item>
			<ListGroup.Item>Twitter</ListGroup.Item>
			<ListGroup.Item>Instagram</ListGroup.Item>
			<ListGroup.Item>Google</ListGroup.Item>
		</ListGroup>
	);
};

export default ListGroupAlert;
