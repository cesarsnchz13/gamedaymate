import { create } from 'zustand';

const useFixtureStore = create((set) => ({
	premierLeagueFixtures: [],
	laLigaFixtures: [],
	bundesligaFixtures: [],
	serieAFixtures: [],
	championsLeagueFixtures: [],
	europaLeagueFixtures: [],

	setPremierLeagueFixtures: (data) => {
		set({ premierLeagueFixtures: data });
	},
	setLaLigaFixtures: (data) => {
		set({ laLigaFixtures: data });
	},
	setBundesligaFixtures: (data) => {
		set({ bundesligaFixtures: data });
	},
	setSerieAFixtures: (data) => {
		set({ serieAFixtures: data });
	},
	setChampionsLeagueFixtures: (data) => {
		set({ championsLeagueFixtures: data });
	},
	setEuropaLeagueFixtures: (data) => {
		set({ europaLeagueFixtures: data });
	},
}));

export default useFixtureStore;
