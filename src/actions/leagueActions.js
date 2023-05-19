import axios from 'axios';

export const fetchLeaguesSuccess = (leagues) => {
	return {
		type: 'FETCH_LEAGUES_SUCCESS',
		payload: leagues,
	};
};

export const fetchLeagues = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/leagues`
			);
			const leagues = response;
			console.log({ response });
			dispatch(fetchLeaguesSuccess(leagues));
		} catch (error) {
			console.error(error);
		}
	};
};
