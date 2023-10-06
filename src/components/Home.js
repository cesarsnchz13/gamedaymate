/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import useFixtureStore from '../store/FixtureStore';
import {
	getPremierLeagueFixtures,
	getLaLigaFixtures,
	getBundesligaFixtures,
	getSerieAFixtures,
	getChampionsLeagueFixtures,
	getEuropaLeagueFixtures,
} from '../services/api';
import League from '../utils/Leagues';

const FixtureCard = ({ fixtures, date }) => {
	return (
		<div className='card text-center home-card'>
			<h3 className='card-title'>{date} Fixtures</h3>
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
					<tbody className='table-group-divider'>{fixtures()}</tbody>
				</table>
			</div>
		</div>
	);
};

const tableRows = (fixtures) => {
	const rows = fixtures.map((fixture) => {
		const homeTeam = fixture.teams.home.name;
		const awayTeam = fixture.teams.away.name;

		// Render each game and it's info
		return (
			<tr key={fixture.fixture.id}>
				<th>LEAGUE NAME HERE</th>
				<td>{homeTeam}</td>
				<td>v</td>
				<td>{awayTeam}</td>
				<td></td>
			</tr>
		);
	});
	return rows;
};

export default function Home() {
	const [premierLeagueFixtures, setPremierLeagueFixtures] = useState([]);

	useEffect(() => {
		const setData = async () => {
			const fix = await getPremierLeagueFixtures();
			const premierLeague = new League(39, fix);
			console.log(premierLeague);
			setPremierLeagueFixtures(premierLeague.fixtures);
		};
		setData();
	}, []);

	console.log({ premierLeagueFixtures });

	return (
		<div id='home'>
			<h1>Matchday Fixtures</h1>
			<p>Display live games, upcoming fixtures, and more.</p>
			<div id='fixture-cards'>
				<FixtureCard
					fixtures={() => tableRows(premierLeagueFixtures)}
					date={'Previous'}
				/>
			</div>
		</div>
	);
}
