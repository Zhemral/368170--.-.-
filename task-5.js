const fetch = require("node-fetch");

async function findMostFrequentCharacters(N) {
    const url = 'https://swapi.dev/api/people';
    
    try {
        // Fetch data from the API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        let characterFilmsCounts = data.results.map(character => ({
            name: character.name,
            filmsCount: character.films.length
        }));
        
        // Sort characters by the number of films they're in, in descending order
        characterFilmsCounts.sort((a, b) => b.filmsCount - a.filmsCount);
        
        // Get the top N characters
        const mostFrequentCharacters = characterFilmsCounts.slice(0, N).map(character => character.name);
        
        return mostFrequentCharacters;
    } catch (error) {
        // Handle any network errors by returning an empty array
        return [];
    }
}
