import React, { useState, useEffect } from 'react';
import { getLeagueByName } from './services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeagues } from './actions/leagueActions';

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
	const leaguesData = useSelector((state) => state.leaguesData);
	const [league, setLeague] = useState([]);

	const dispatch = useDispatch();
	console.log({ leaguesData });

	useEffect(() => {
		dispatch(fetchLeagues());
	}, [dispatch]);

	useEffect(() => {
		const fetchLeague = async () => {
			try {
				const leagueData = await getLeagueByName('La Liga', 'Spain');
				// Do further processing with the league data to get the live fixtures

				setLeague(leagueData);
				console.log({ leagueData });
			} catch (error) {
				console.error(error);
			}
		};

		fetchLeague();
	}, []);

	return (
		<div id='home'>
			<h1>Matchday Mixtures</h1>
			<p>Display live games, upcoming fixtures, and more.</p>
			<div id='fixture-cards'>
				<ShowLiveFixtures fixtures={league} />{' '}
				{/* Pass the live fixtures as props */}
				<ShowTodaysFixtues fixtures={league} />{' '}
				{/* Pass the live fixtures as props */}
				<ShowThisWeeksFixtures fixtures={league} />{' '}
				{/* Pass the live fixtures as props */}
			</div>
		</div>
	);
}
