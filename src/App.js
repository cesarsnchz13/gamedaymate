/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom';
import Home from './Home';
import Leagues from './Leagues';
import Teams from './Teams';
import About from './About';
import NotFound from './NotFound';
import Navbar from './Navbar';

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/leagues' element={<Leagues />} />
					<Route path='/teams' element={<Teams />} />
					<Route path='/about' element={<About />} />
					<Route component={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
