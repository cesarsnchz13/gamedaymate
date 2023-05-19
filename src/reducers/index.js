import { combineReducers } from 'redux';
import leaguesReducer from './leaguesReducer';

const rootReducer = combineReducers({
	leagues: leaguesReducer,
});

export default rootReducer;
