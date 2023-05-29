import axios from 'axios';

async function makeApiRequest(version, path, params = {}) {
	const url = `${process.env.REACT_APP_API_BASE_URL}/${version}/${path}`;

	let options = {
		method: 'GET',
		url,
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
			'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
		},
	};

	if (version === 'v3') options.params = params;

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getLeagues() {
	try {
		const apiCall = await makeApiRequest('v3', 'leagues');
		return apiCall.response;
	} catch (error) {
		console.warn(error);
	}
}

export async function getTeamsByLeague(leagueId) {
	let requestPath = `teams/league/${leagueId}`;
	try {
		const apiCall = await makeApiRequest('v2', requestPath);
		return apiCall.response;
	} catch (error) {
		console.warn(error);
	}
}

export async function getFixturesByLeague(leagueId) {
	try {
		const apiCall = await makeApiRequest('v3', 'leagues', {
			league: leagueId,
			season: 2022,
		});
		return apiCall.response;
	} catch (error) {
		console.warn(error);
	}
}

export async function getPremierLeagueFixtures() {
	return getFixturesByLeague(39);
}

export async function getLaLigaFixtures() {
	return getFixturesByLeague(140);
}

export async function getBundesligaFixtures() {
	return getFixturesByLeague(78);
}

export async function getSerieAFixtures() {
	return getFixturesByLeague(135);
}

export async function getChampionsLeagueFixtures() {
	return getFixturesByLeague(2);
}

export async function getEuropaLeagueFixtures() {
	return getFixturesByLeague(3);
}
