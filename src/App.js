import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';
// Genere dei libri
import fantasy from '../src/data/fantasy.json';
import history from '../src/data/history.json';
import horror from '../src/data/horror.json';
import romance from '../src/data/romance.json';
import scifi from '../src/data/scifi.json';

function App() {
	return (
		<div>
			<MyNav />
			<Welcome />
			{/* <SingleBook book={horror[45]} title='Celtic Empire (Dirk Pitt Adventure)' /> */}
			<AllTheBooks setGenre={fantasy} />
			<MyFooter />
		</div>
	);
}

export default App;
