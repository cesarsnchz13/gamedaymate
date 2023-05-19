/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import Leagues from './Leagues';
import Teams from './Teams';
import About from './About';
import NotFound from './NotFound';
import Navbar from './Navbar';

function App() {
	return (
		<>
			<Provider store={store}>
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
			</Provider>
		</>
	);
}

export default App;
