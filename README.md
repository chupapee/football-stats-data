<h2 align="center">⚽️ A simple NPM Package providing football data ⚽️</h1>

<p>

<img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000"  />

</p>

## Install

```sh

yarn add football-stats

```

## Usage

```javascript
import { Fbref } from 'football-test';

const fbref = new Fbref();

fbref.standings('La-Liga').then((teams) => {
	console.log(teams);
});
```

```javascript
[
  {
	"Rank": "🔵 2",
	"Squad": " Real Madrid",
	"Matches Played": "37",
	"Wins": "24",
	"Draws": "5",
	"Losses": "8",
	"Goals For": "74",
	"Goals Against": "35",
	"Goal Difference": "+39",
	"Points": "77",
	"Points/Game": "2.08",
	"xG": "73.8",
	"xG Allowed": "36.6",
	"xG Difference": "+37.2",
	"xG Difference/90": "+1.00",
	"Last 5": "L W L W W",
	...
  },
  {
	"Rank": "🔵 3",
	"Squad": " Atlético Madrid",
	"Matches Played": "37",
	"Wins": "23",
	"Draws": "7",
	"Losses": "7"
	...
  },
]
```

```javascript
const league = 'La-Liga';
const clubName = 'Real Madrid';

fbref.leaguePlayersStats(league, clubName).then((players) => {
	console.log(players);
});

/**
[
  {
	"Rk": "275",
	"Player": "Vinicius Júnior",
	"Nation": "br BRA",
	"Position": "FW",
	"Squad": "Real Madrid",
	"Current age": "22-323",
	"Year of birth": "2000",
	"Matches Played": "32",
	"Starts": "31",
	"Minutes": "2,733",
	"90s Played": "30.4",
	"Goals": "10",
	"Assists": "9",
	"Goals + Assists": "19",
	"Non-Penalty Goals": "10",
	"Yellow Cards": "10",
	"Red Cards": "1",
	"xG": "10.4",
	"Non-Penalty xG": "10.4",
	"xAG": "9.0",
	"npxG + xAG": "0.64",
	"Progressive Carries": "216",
	...
  },
  {...},
  {...},
  ...
]
*/
```

## Development setup

```sh

git clone https://github.com/comeall09/football-stats.git <folder-name>

cd <folder-name>

npm install

npm run dev

```
