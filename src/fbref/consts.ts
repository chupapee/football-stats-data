const BASE_URL = 'http://fbref.com/en';

export enum StandingIndicators {
	qualifier1 = '🔵', // ucl
	qualifier2 = '🟠', // uel
	qualifier3 = '🟢', // uecl
	relegate = '🔻',
}

// name: id
export enum Leagues {
	'Premier-League' = 9,
	'La-Liga' = 12,
	'Serie-A' = 11,
	Bundesliga = 20,
	'Ligue-1' = 13,
	'Primeira-Liga' = 32,

	'Ukrainian-Premier-League' = 39,
	'Russian-Premier-League' = 30,
	Eredivisie = 23,
	'Belgian-First-Division-A' = 37,
	'Scottish-Premiership' = 40,
	'Super-Lig' = 26,
	'Saudi-Professional-League' = 70,
}

export type TLeagueName = keyof typeof Leagues;

export const urlList = {
	queries: {
		standings(leagueName: TLeagueName) {
			// fbref.com/comps/:leagueName
			return `${BASE_URL}/comps/${Leagues[leagueName]}`;
		},
		leagueStandardStats(leagueName: TLeagueName) {
			// fbref.com/comps/:leagueId/stats/:leagueName-Stats
			return `${BASE_URL}/comps/${Leagues[leagueName]}/stats/${leagueName}-Stats`;
		},
	},
};
