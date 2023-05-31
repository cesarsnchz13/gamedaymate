//TODO: be able to grab the data from the store to fufill some of these functions

export default class League {
	constructor(id, fixtures) {
		this.id = id;
		this.fixtures = fixtures;
	}

	name() {
		const result = this.fixtures[0].league.name;
		return result;
	}

	country() {
		return () => this.fixtures[0].league.country;
	}

	logo() {
		return this.fixtures[0].league.logo;
	}

	flag() {
		return this.fixtures[0].league.flag;
	}

	getPastFixtures() {
		const currentDate = new Date();
		const yesterday = currentDate.setDate(currentDate.getDate() - 1);
		const pastFixtures = this.fixtures.filter((fixture) => {
			const fixtureDate = new Date(fixture.fixture.date);
			return fixtureDate < yesterday;
		});
		console.log({ pastFixtures });
		return pastFixtures;
	}

	async getTodayFixtures() {
		const currentDate = new Date();
		const todayFixtures = this.fixtures.filter((fixture) => {
			const fixtureDate = new Date(fixture.fixture.date);
			return (
				fixtureDate.getDate() === currentDate.getDate() &&
				fixtureDate.getMonth() === currentDate.getMonth() &&
				fixtureDate.getFullYear() === currentDate.getFullYear()
			);
		});
		return todayFixtures;
	}

	async getFutureFixtures() {
		const currentDate = new Date();
		const futureFixtures = this.fixtures.filter((fixture) => {
			const fixtureDate = new Date(fixture.fixture.date);
			return fixtureDate > currentDate;
		});
		return futureFixtures;
	}

	async getTeams() {
		// Implement logic to fetch list of teams in the league
		// Return list of teams
	}

	async getStandings() {
		// Implement logic to fetch league standings
		// Return league standings
	}

	async getTopScorers() {
		// Implement logic to fetch top scorers in the league
		// Return list of top scorers
	}

	async getTopAssists() {
		// Implement logic to fetch top assist providers in the league
		// Return list of top assist providers
	}

	async getTopRedCards() {
		// Implement logic to fetch players with the most red cards in the league
		// Return list of players with the most red cards
	}

	async getTopYellowCards() {
		// Implement logic to fetch players with the most yellow cards in the league
		// Return list of players with the most yellow cards
	}

	async getInjuries() {
		// Implement logic to fetch injuries in the league
		// Return list of injuries
	}
}
