/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
// import fetchAndSetFixturesToStore from '../helpers/fetchAndSetFixturesToStore';
import useFixtureStore from '../store/fixtureStore';
import {
	getPremierLeagueFixtures,
	getLaLigaFixtures,
	getBundesligaFixtures,
	getSerieAFixtures,
	getChampionsLeagueFixtures,
	getEuropaLeagueFixtures,
} from '../services/api';

const ShowLiveFixtures = ({ fixtures }) => {
	return (
		<div className='card text-center home-card'>
			<h3 className='card-title'>Live Fixtures</h3>
			<div className='card-body'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'></th>
							<th scope='col'>Home</th>
							<th scope='col'></th>
							<th scope='col'>Away</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody className='table-group-divider'>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

const ShowTodaysFixtues = ({ fixtures }) => {
	return (
		<div className='card text-center home-card'>
			<h3 className='card-title'>Today's Fixtures</h3>
			<div className='card-body'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'></th>
							<th scope='col'>Home</th>
							<th scope='col'></th>
							<th scope='col'>Away</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody className='table-group-divider'>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
const ShowThisWeeksFixtures = ({ fixtures }) => {
	return (
		<div className='card text-center home-card'>
			<h3 className='card-title'>This Week's Fixtures</h3>
			<div className='card-body'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'></th>
							<th scope='col'>Home</th>
							<th scope='col'></th>
							<th scope='col'>Away</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody className='table-group-divider'>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td>Real Madrid</td>
							<td>v</td>
							<td>FC Barcelona</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default function Home() {
	const {
		setPremierLeagueFixtures,
		setLaLigaFixtures,
		setBundesligaFixtures,
		setSerieAFixtures,
		setChampionsLeagueFixtures,
		setEuropaLeagueFixtures,
	} = useFixtureStore();
	useEffect(() => {
		const fetchAndSetFixturesToStore = async () => {
			const premierLeagueFixtures = await getPremierLeagueFixtures();
			const laLigaFixtures = await getLaLigaFixtures();
			const bundesligaFixtures = await getBundesligaFixtures();
			const serieAFixtures = await getSerieAFixtures();
			const championsLeagueFixtures = await getChampionsLeagueFixtures();
			const europaLeagueFixtures = await getEuropaLeagueFixtures();

			setPremierLeagueFixtures(premierLeagueFixtures);
			setLaLigaFixtures(laLigaFixtures);
			setBundesligaFixtures(bundesligaFixtures);
			setSerieAFixtures(serieAFixtures);
			setChampionsLeagueFixtures(championsLeagueFixtures);
			setEuropaLeagueFixtures(europaLeagueFixtures);
		};
		fetchAndSetFixturesToStore();
	}, []);

	const { premierLeagueFixtures, laLigaFixtures } = useFixtureStore();

	return (
		<div id='home'>
			<h1>Matchday Mixtures</h1>
			<p>Display live games, upcoming fixtures, and more.</p>
			<div id='fixture-cards'>
				<ShowLiveFixtures /> {/* Pass the live fixtures as props */}
				<ShowTodaysFixtues /> {/* Pass the live fixtures as props */}
				<ShowThisWeeksFixtures /> {/* Pass the live fixtures as props */}
			</div>
		</div>
	);
}
