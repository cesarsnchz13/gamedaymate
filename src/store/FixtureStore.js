import { useEffect } from 'react';
import {
	getPremierLeagueFixtures,
	getLaLigaFixtures,
	getBundesligaFixtures,
	getSerieAFixtures,
	getChampionsLeagueFixtures,
	getEuropaLeagueFixtures,
} from '..services/api';
import { create } from 'zustand';

const useFixtureStore = create((set) => ({
	fixtures: [],

	fetchFixtures: async () => {
		try {
			const premierLeagueFixtures = await getPremierLeagueFixtures();
			const laLigaFixtures = await getLaLigaFixtures();
			const bundesligaFixtures = await getBundesligaFixtures();
			const serieAFixtures = await getSerieAFixtures();
			const championsLeagueFixtures = await getChampionsLeagueFixtures();
			const europaLeagueFixtures = await getEuropaLeagueFixtures();

			set((state) => ({
				fixtures: [
					...state.fixtures,
					premierLeagueFixtures,
					laLigaFixtures,
					bundesligaFixtures,
					serieAFixtures,
					championsLeagueFixtures,
					europaLeagueFixtures,
				],
			}));
		} catch (error) {
			console.warn(error);
		}
	},
}));

export const FixtureStoreProvider = ({ children }) => {
	const fetchFixtures = useFixtureStore((state) => state.fetchFixtures);

	useEffect(() => {
		fetchFixtures();
	}, []);

	return children;
};
