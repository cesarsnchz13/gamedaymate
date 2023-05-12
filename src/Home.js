import React from 'react';

const ShowLiveFixtures = () => {
	return (
		<div className='card home-card'>
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
		<div className='card home-card'>
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
const ShowThisWeeksFixtures = () => {};

export default function Home() {
	return (
		<div id='home'>
			<h1>Welcome to Soccer App!</h1>
			<p>Display live games, upcoming fixtures, and more.</p>
			<ShowLiveFixtures />
		</div>
	);
}
