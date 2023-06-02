import puppeteer from 'puppeteer';

export const fetcher = async (url: string, waitForSelector: string) => {
	try {
		const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: 'domcontentloaded' });
		await page.waitForSelector(waitForSelector);

		const content: HTML = await page.content();
		browser.close();
		return content;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		throw new Error('timeout error, please try again');
	}
};
