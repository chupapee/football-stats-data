import { leagues } from './consts';
import { LeagueStandardStatsService } from './leagueStandardStats.service';
import { StandingsService } from './standings.service';

type TLeagueName = keyof typeof leagues;

const leagueErrText = 'incorrect league name';
const filterErrText = 'incorrect club name';
const tooManyReqErrText = `
	You have made too many requests (more than 30 within a minute).\n
	The function will be available again in an hour.\n\n
	It is recommended to cache the result of each function call as Fbref imposes a limit on the number of requests allowed per minute
`;

export class Fbref {
	standings = async (leagueName: TLeagueName) => {
		try {
			if (!(leagueName in leagues)) throw new Error(leagueErrText);
			const page = await StandingsService.fetch(leagueName);
			if (page) {
				return StandingsService.parse(page);
			}
			throw new Error();
		} catch (error) {
			if (error instanceof Error && error.message === leagueErrText) {
				throw new Error(error.message);
			}
			throw new Error(tooManyReqErrText);
		}
	};

	leaguePlayersStats = async (leagueName: TLeagueName, clubName?: string) => {
		try {
			if (!(leagueName in leagues)) throw new Error(leagueErrText);
			const page = await LeagueStandardStatsService.fetch(leagueName);
			if (page) {
				const allPlayersStats = LeagueStandardStatsService.parse(page);
				if (clubName) {
					const filteredStats = allPlayersStats.filter(
						({ Squad }) => Squad?.toLowerCase().trim() === clubName.toLowerCase().trim()
					);
					if (filteredStats.length) return filteredStats;
					throw new Error(filterErrText);
				}
				return allPlayersStats;
			}
			throw new Error();
		} catch (error) {
			if (error instanceof Error) {
				if ([leagueErrText, filterErrText].includes(error.message)) throw new Error(error.message);
				throw new Error(tooManyReqErrText);
			}
		}
	};
}
