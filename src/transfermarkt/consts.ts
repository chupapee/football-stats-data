const BASE_URL = 'http://www.transfermarkt.com';

export const urlList = {
	biggestIncrease: `${BASE_URL}/spieler-statistik/marktwertspruenge/marktwertetop?land_id=0&spielerposition_id=0&altersklasse=alle&ausrichtung=alle&plus=2`,
	latestUpdates: ({ minMarketVal = 10_000_000, maxMarketVal = 300_000_000, minAge = 16, maxAge = 45 }) =>
		`${BASE_URL}/spieler-statistik/marktwertAenderungen/marktwertetop/?plus=1&galerie=0&position=alle&spielerposition_id=0&spieler_land_id=0&verein_land_id=&wettbewerb_id=alle&alter=16+-+45&filtern_nach_alter=16%3B45&minAlter=${minAge}&maxAlter=${maxAge}&minMarktwert=${minMarketVal}&maxMarktwert=${maxMarketVal}&yt0=Show`,
};
