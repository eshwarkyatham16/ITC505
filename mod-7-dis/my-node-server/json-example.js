const movieCollection = `{
    "movies": [
        {
            "title": "Inception",
            "director": "Christopher Nolan",
            "year": 2010,
            "genre": "Sci-Fi",
            "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
        },
        {
            "title": "The Matrix",
            "director": "The Wachowskis",
            "year": 1999,
            "genre": "Sci-Fi",
            "actors": ["Keanu Reeves", "Laurence Fishburne"]
        }
    ]
}`;

const parsedData = JSON.parse(movieCollection);
console.log(parsedData);

const stringifiedData = JSON.stringify(parsedData, null, 2);
console.log(stringifiedData);
