const base_url = 'http://fbref.com/en';

type TIndicators = Record<'qualifier1' | 'qualifier2' | 'qualifier3' | 'relegate', string>;

export const standingIndicators: TIndicators = {
	qualifier1: '🔵', // ucl
	qualifier2: '🟠', // uel
	qualifier3: '🟢', // uecl
	relegate: '🔻',
};

// name: id
export const leagues = {
	'Premier-League': 9,
	'La-Liga': 12,
	'Serie-A': 11,
	Bundesliga: 20,
	'Ligue-1': 13,
	'Primeira-Liga': 32,

	'Ukrainian-Premier-League': 39,
	'Russian-Premier-League': 30,
	Eredivisie: 23,
	'Belgian-First-Division-A': 37,
	'Scottish-Premiership': 40,
	'Super-Lig': 26,
	'Saudi-Professional-League': 70,
};

export const urlList = {
	queries: {
		standings(leagueName: keyof typeof leagues) {
			// fbref.com/comps/:leagueName
			return `${base_url}/comps/${leagues[leagueName]}`;
		},
		leagueStandardStats(leagueName: keyof typeof leagues) {
			// fbref.com/comps/:leagueId/stats/:leagueName-Stats
			return `${base_url}/comps/${leagues[leagueName]}/stats/${leagueName}-Stats`;
		},
	},
};
