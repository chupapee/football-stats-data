import { leagues } from './consts';
import { LeagueStandardStatsService } from './leagueStandardStats.service';
import { StandingsService } from './standings.service';

type TLeagueName = keyof typeof leagues;

const leagueErrText = 'incorrect league name';
const filterErrText = 'incorrect club name';
const fetchErrText = 'failed to fetch';

export class Fbref {
	standings = async (leagueName: TLeagueName) => {
		if (!(leagueName in leagues)) throw new Error(leagueErrText);
		const page = await StandingsService.fetch(leagueName);
		if (page) {
			return StandingsService.parse(page);
		}
		throw new Error(fetchErrText);
	};

	leaguePlayersStats = async (leagueName: TLeagueName, clubName?: string) => {
		if (!(leagueName in leagues)) throw new Error('incorrect league name');
		const page = await LeagueStandardStatsService.fetch(leagueName);
		if (page) {
			const allPlayersStats = LeagueStandardStatsService.parse(page);
			if (clubName) {
				const filteredStats = allPlayersStats.filter(({ Squad }) => Squad?.toLowerCase().trim() === clubName.toLowerCase().trim());
				if (filteredStats.length) return filteredStats;
				throw new Error(filterErrText);
			}
			return allPlayersStats;
		}
		throw new Error(fetchErrText);
	};
}
