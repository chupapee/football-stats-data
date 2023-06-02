<h2 align="center">⚽️ A simple package providing football data ⚽️</h2>

<p>

<img alt="Version" src="https://img.shields.io/badge/version-0.0.3-darkGreen.svg?cacheSeconds=2592000"  />

</p>

## Install

```sh

yarn add football-stats-data

```

## Usage

```javascript
import { fbref } from 'football-stats-data';

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
  ...18 more items
]
```


```javascript
import { transfermarkt } from 'football-stats-data';

transfermarkt.latestUpdates({ minAge: 20, maxAge: 25 }).then(players => {
  console.log(players);
});

```

```javascript
[
  {
    Player: 'João Pedro',
    Position: 'Centre-Forward',
    Age: '21',
    Club: 'Watford FC',
    'New Market Value': '€32.00m',
    'old market value': '€24.00m',
    Difference: '€8.00m',
    'per cent': '33.3 %',
    'Changed on': '01.06.2023'
  },
  {
    Player: 'Anel Ahmedhodzic',
    Position: 'Centre-Back',
    Age: '24',
    Club: 'Sheffield United',
    'New Market Value': '€20.00m',
    'old market value': '€16.00m',
    Difference: '€4.00m',
    'per cent': '25.0 %',
    'Changed on': '01.06.2023'
  },
  ...25 more elements
]
```

## Development setup

```sh

git clone https://github.com/comeall09/football-stats.git <folder-name>

cd <folder-name>

npm install

npm run dev

```
