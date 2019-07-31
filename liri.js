// declare file system variable
var fs = require('fs');

// from readme.md file
// var doteng = require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

// Include the axios npm package
var axios = require("axios");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// object called "liri"
var liri = {
    concertThis: function() {
        // Create an empty variable for holding the artist or band name
        var artistBandName = "";
        // key = '13fd340b5e8b1dc6eec23eccd52837bd'
        // Loop through all the words in the node argument
        // And do a little for-loop magic to handle the inclusion of "+"s
        for (var i = 3; i < nodeArgs.length; i++) {
            if (i > 3 && i < nodeArgs.length) {
                artistBandName = artistBandName + "+" + nodeArgs[i];
            } else {
                artistBandName += nodeArgs[i];
            }
        }

        // Then run a request with axios to the Bands In Town API with the arist or band name specified
        var queryUrl = "https://rest.bandsintown.com/artists/" + artistBandName + "/events?app_id=codingbootcamp";

        axios.get(queryUrl).then(
        function(response) {
            console.log(response);
        })
        .catch(function(error) {
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
    },

    spotifyThisSong: function() {
        // Create an empty variable for holding the client id, client secret and redirect url
        var spotify = require('node-spotify-api');
        // Create an empty variable for holding the client id, client secret and redirect url
        var spotify = new Spotify({
            id: '1740da635c3c49d4b9f3caca4241631d',
            secret: 'dad1503459d14371845d1449bad12204'
        });
        spotify
            .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
            .then(function(data) {
                console.log(data); 
            })
            .catch(function(err) {
                console.error('Error occurred: ' + err);
        });
    },

    // method called "movie-this" within "liri" object
    movieThis: function() {
        // Create an empty variable for holding the movie name
        var movieName = "";

        // Loop through all the words in the node argument
        // And do a little for-loop magic to handle the inclusion of "+"s
        for (var i = 3; i < nodeArgs.length; i++) {
            if (i > 3 && i < nodeArgs.length) {
                movieName = movieName + "+" + nodeArgs[i];
            } else {
                movieName += nodeArgs[i];
            }
        }

        // Then run a request with axios to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        // logic for Mr. Nobody default
        if (process.argv[3] === "Mr. Nobody") {
            queryUrl = "http://www.omdbapi.com/?t=" + "mr+nobody" + "&y=&plot=short&apikey=trilogy";
        }

        axios.get(queryUrl).then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release date: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function(error) {
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
    },
    doWhatItSays: function() {
        // read the "fs" varuable and put data in "random.txt" file, can return error and data
        fs.readFile('random.txt', 'utf8', function(error, data) {
            // if not there return error
            if (error) {
                return console.log(error);
            }
            // declare variable "songTitle"
            var songTitle = data();

            // console.log the sum of the elements
            console.log("");
        });
    }
};

// export "liri" object
module.exports = liri;