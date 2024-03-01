import Parser from 'rss-parser';

// Funkce pro míchání položek
function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // ES6 způsob prohození hodnot
    }
    return array;
}

export default async (req: any, res: any) => {
    const parser = new Parser();
    const feedUrls = [
        'https://www.vidlakovykydy.cz/rss.xml', // URL prvního feedu
        'https://aeronet.news/feed/', // URL druhého feedu
        'https://www.parlamentnilisty.cz/export/rss.aspx?tag=fiala'
        // Přidejte další URL feedů podle potřeby
    ];

    // Paralelní načtení všech feedů s ošetřením selhání
    const feedPromises = feedUrls.map(url =>
        parser.parseURL(url).then(
            feed => ({ status: 'fulfilled', value: feed }),
            error => ({ status: 'rejected', reason: error }),
        ),
    );

    const feedResults = await Promise.allSettled(feedPromises);

    console.log(feedResults)

    // Filtrujte jen úspěšně načtené feedy
    const successfulFeeds = feedResults
        .filter(result => result.status === 'fulfilled' && result.value.status === 'fulfilled')
        .map(result => (result as PromiseFulfilledResult<any>).value.value);

    // Sloučení všech položek z úspěšně načtených feedů do jednoho pole
    const allItems = successfulFeeds.flatMap(feed => feed.items);

    // Promíchání sloučených položek
    const shuffledItems = shuffleArray(allItems);

    res.status(200).json(shuffledItems);
};
