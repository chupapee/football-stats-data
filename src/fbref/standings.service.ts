import * as cheerio from 'cheerio';
import axios from 'axios';

import { leagues, standingIndicators, urlList } from './consts';
import { IStandings, ITeamStat } from './types';

export class StandingsService {
	static fetch = async (leaguenName: keyof typeof leagues): Promise<HTML> => {
		const url = urlList.queries.standings(leaguenName);

		try {
			const response = await axios.get<HTML>(url);
			return response.data;
		} catch (error) {
			throw new Error('failed to fetch');
		}
	};

	static parse = (page: HTML): IStandings => {
		const PAGE_FIRST_TABLE = 0;

		const $ = cheerio.load(page);
		const table = $('table.stats_table').eq(PAGE_FIRST_TABLE);

		const headers: Array<keyof ITeamStat> = [];
		table.find('thead tr th').each((_, el) => {
			headers.push($(el).attr('aria-label') as keyof ITeamStat);
		});

		const cells: string[] = [];
		table.find('tbody tr').each((_, tr) => {
			// skip table rows with the class "spacer" as they serve as row separators
			if (!$(tr).hasClass('spacer')) {
				tr.children.map((el) => {
					const text = $(el).text();
					for (const key in standingIndicators) {
						if ($(el).hasClass(key)) {
							const indicator = standingIndicators[key as keyof typeof standingIndicators];
							cells.push(`${indicator} ${text}`);
							return;
						}
					}

					cells.push(text);
				});
			}
		});

		const standings: IStandings = [];
		for (let i = 0; i < cells.length; i += headers.length) {
			const teamStat: ITeamStat = {} as ITeamStat;
			for (let j = 0; j < headers.length; j++) {
				teamStat[headers[j]] = cells[i + j];
			}
			standings.push(teamStat as ITeamStat);
		}

		return standings;
	};
}
