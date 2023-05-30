//TODO: be able to grab the data from the store to fufill some of these functions

export default class League {
	constructor(id) {
		this.id = id;
	}

	name() {}

	country() {}

	logo() {}

	flag() {}

	async getPastFixtures() {
		// Implement logic to fetch past fixtures
		// Return past fixtures
	}

	async getLiveFixtures() {
		// Implement logic to fetch live fixtures
		// Return live fixtures
	}

	async getFutureFixtures() {
		// Implement logic to fetch future fixtures
		// Return future fixtures
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
