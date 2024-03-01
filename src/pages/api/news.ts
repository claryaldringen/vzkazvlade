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
        // Přidejte další URL feedů podle potřeby
    ];

    try {
        // Paralelní načtení všech feedů
        const feeds = await Promise.all(
            feedUrls.map(url => parser.parseURL(url)),
        );

        // Sloučení všech položek z načtených feedů do jednoho pole
        const allItems = feeds.flatMap(feed => feed.items);

        // Promíchání sloučených položek
        const shuffledItems = shuffleArray(allItems);

        res.status(200).json(shuffledItems);
    } catch (error) {
        res.status(500).json({
            message: 'Chyba při načítání RSS feedů',
            error,
        });
    }
};
