# GameDayMate (Work in Progress)

This is a soccer fan application that aims to provide live game updates, upcoming fixtures, team details, and more. The app is built using React and utilizes a soccer API to fetch the necessary data. Please note that this README is a work in progress and will be updated as the project evolves.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Description

GameDayMate is being developed to allow soccer enthusiasts to stay up to date with live game scores, view upcoming fixtures, and explore information about their favorite teams and leagues. The application provides an intuitive user interface for a seamless user experience.

## Features

- Live game updates: Get real-time scores, team lineups, and match statistics.
- Upcoming fixtures: View a schedule of upcoming matches with date, time, and venue details.
- Team details: Explore information about soccer teams, including their logo, players, and recent performance.
- Leagues: Discover different soccer leagues around the world and get league-specific data.
- Email notifications: Ability to subscribe to email updates for favorite teams and upcoming matches.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/soccer-app.git
   ```

2. Install the dependencies:

   ```bash
   cd soccer-app
   npm install
   ```

## Installation

1. Start the development server:

```bash
  npm start
```

2.  Start the development server:

```bash
  http://localhost:3000
```

## API

This application utilizes the [API-Football API](https://www.api-football.com/) to fetch soccer data, including live game updates, fixtures, team details, and more. You will need an API key to access the data. Please sign up on the API-Football website to obtain your API key.

To set up the API key for your Soccer App:

1. Sign up on the [API-Football website](https://www.api-football.com/) and obtain your API key.
2. Create a `.env` file in the root directory of your project.
3. In the `.env` file, add the following line:

```
REACT_APP_API_KEY=your-api-key
```

Replace `your-api-key` with the API key you obtained from API-Football.

Please note that the API-Football API has usage limits and may require a paid subscription for certain features or higher usage levels. Refer to the API-Football documentation for more information on the available endpoints and data access.

Remember to keep your API key secure and avoid committing it to version control systems or sharing it publicly.

## License

GameDayMate is open source and released under the [MIT License](https://opensource.org/licenses/MIT)
