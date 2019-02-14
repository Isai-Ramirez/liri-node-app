require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);



var search = process.argv[2];
// // Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");


if (search === "spotify-this-song") {
    console.log("Searching for song");
    spotify.search({ type: 'track', query: term }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    
        console.log(data.Artist);
        // Artist(s)
        console.log(data.name);
        // The song's name
        console.log(data.url)
        // A preview link of the song from Spotify
        console.log(data.album)
        // The album that the song is from
    });
};
if (search === "concert-this") {
    console.log("Searching for the artist");
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp").then(
        function (response) {
            //Name of the venue
            console.log("Location: " + response.data.venue.name);
            // Venue location
            console.log("City: " + response.data.venue.city, + response.data.venue.country);
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log("Date: " + response.data.datetime);
            // couldn't get the format to be MM/DD/YYYY sorry
        }
    )
};
if (search === "movie-this") {
    console.log("Searching for the movie");
    
    axios.get("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("The title of the movie: " + response.data.Title);
            //   * Title of the movie.
            console.log("The movie came out this year: " + response.data.Year);
            //   * Year the movie came out.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * IMDB Rating of the movie.
            console.log("The rating in Rotten Tomatoes is: " + response.data.ratings.source.RottenTomatoes.value);
            //   * Rotten Tomatoes Rating of the movie.
            console.log("The movie was produce in: " + response.data.Country);
            //   * Country where the movie was produced.
            console.log("The language of the movie is: " + response.data.Language);
            //   * Language of the movie.
            console.log("plot: " + response.data.Plot);
            //   * Plot of the movie.
            console.log("Actors: " + response.data.Actors);
            //   * Actors in the movie.
        }
    )
};
if (search === "do-what-it-says") {
    console.log("As you say");
    spotify.search({ type: 'track', query: "The sign" }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    
        console.log(data.Artist);
        // Artist(s)
        console.log(data.name);
        // The song's name
        console.log(data.url)
        // A preview link of the song from Spotify
        console.log(data.album)
        // The album that the song is from
    });
};





spotify.search({ type: 'track', query: term }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.Artist);
    // Artist(s)
    console.log(data.name);
    // The song's name
    console.log(data.url)
    // A preview link of the song from Spotify
    console.log(data.album)
    // The album that the song is from
});