import axios from 'axios';

async function makeApiRequest(path, params = {}) {
	const url = `${process.env.REACT_APP_API_BASE_URL}/${path}`;
	console.log({ url });
	const options = {
		method: 'GET',
		url,
		params,
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
			'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getLeagueByName(leagueName, country = null, reduxState) {
	try {
		console.log({ reduxState });
		const apiCall = await makeApiRequest('leagues', {
			country: country,
			search: leagueName,
		});
		console.log(apiCall);
		return apiCall.response;
	} catch (error) {
		console.warn(error);
	}
}
