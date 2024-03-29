/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom';
import Home from './components/Home';
import Leagues from './components/Leagues';
import Teams from './components/Teams';
import About from './components/About';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import useFixtureStore from './store/FixtureStore';
import {
	getPremierLeagueFixtures,
	getLaLigaFixtures,
	getBundesligaFixtures,
	getSerieAFixtures,
	getChampionsLeagueFixtures,
	getEuropaLeagueFixtures,
} from './services/api';
import getMockData from './helpers/getMockData';

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
