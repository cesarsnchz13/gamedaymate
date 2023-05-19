const initialState = [];

const leaguesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_LEAGUES_SUCCESS':
			return action.payload;
		default:
			return state;
	}
};

export default leaguesReducer;
