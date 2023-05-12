import React from 'react';

const ShowLiveFixtures = () => {
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

const ShowTodaysFixtues = () => {
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
const ShowThisWeeksFixtures = () => {
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
	return (
		<div id='home'>
			<h1>Matchday Mixtures</h1>
			<p>Display live games, upcoming fixtures, and more.</p>
			<div id='fixture-cards'>
				<ShowLiveFixtures />
				<ShowTodaysFixtues />
				<ShowThisWeeksFixtures />
			</div>
		</div>
	);
}
