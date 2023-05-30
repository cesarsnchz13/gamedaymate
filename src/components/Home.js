/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
// import fetchAndSetFixturesToStore from '../helpers/fetchAndSetFixturesToStore';
import useFixtureStore from '../store/FixtureStore';
import League from '../utils/Leagues';

const premierLeague = new League(39);
console.log(premierLeague);

const FixtureCard = ({ fixtures }) => {
	//todo: add logic that grabs
	return (
		<div className='card text-center home-card'>
			<h3 className='card-title'>Today's Fixtures</h3>
			<div className='card-body'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>League</th>
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
						{/* todo:  table rows are dynamically created here from mapping through the fixtures array for the given league */}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default function Home() {
	const { premierLeagueFixtures } = useFixtureStore();
	console.log(premierLeagueFixtures);

	return (
		<div id='home'>
			<h1>Matchday Mixtures</h1>
			<p>Display live games, upcoming fixtures, and more.</p>
			<div id='fixture-cards'>
				<FixtureCard /> {/* todo: have this be dynamic to whatever is mapped */}
			</div>
		</div>
	);
}
