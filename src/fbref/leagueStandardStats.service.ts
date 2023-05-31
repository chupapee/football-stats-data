import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

import { leagues, urlList } from './consts';
import { IPlayerStats } from './types';

export class LeagueStandardStatsService {
	static fetch = async (leagueName: keyof typeof leagues) => {
		const url = urlList.queries.leagueStandardStats(leagueName);
		try {
			const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
			const page = await browser.newPage();
			await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10_000 });
			await page.waitForSelector('#div_stats_standard');
			const content: HTML = await page.content();
			browser.close();

			return content;
		} catch (error) {
			throw new Error('failed to fetch');
		}
	};

	static parse = (page: HTML) => {
		const $ = cheerio.load(page);
		const table = $('#div_stats_standard');

		const headers: Array<keyof IPlayerStats> = [];
		table.find('table thead tr:nth-of-type(2) th').each((_, el) => {
			const header = $(el).attr('aria-label') as keyof IPlayerStats;
			headers.push(header);
		});

		const playersStats: IPlayerStats[] = [];
		table.find('table tbody tr').each((_, team) => {
			team.children.map((str, i) => {
				const index = i % headers.length;
				const text = $(str).text();
				// add empty obj for the next player
				if (index === 0) {
					playersStats.push({} as IPlayerStats);
				}
				playersStats[playersStats.length - 1][headers[index]] = text;
			});
		});
		return playersStats;
	};
}
