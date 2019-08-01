// declare "liri" variable and set = to require "liri.js" file
var liri = require('./liriCommand.js');

// declare command variable that tells liri what action to take
var command = process.argv[2];

// create "switch" statment and pass in "command" variable
switch(command) {
    // if "type" = "concert-this"
    case 'concert-this':
        // run "concert-this" method within "liri" object
        liri.concertThis();
        break;
    // if "type" = "spotify-this-song"
    case 'spotify-this-song':
        // run "spotify-this-song" method within "liri" object
        liri.spotifyThisSong();   
        break;
    // if "type" = "movie-this"
    case 'movie-this':
        // run "movie-this" method within "liri" object
        liri.movieThis();
        break;
    // if "type" = "do-what-it-says'"
    case 'do-what-it-says':
        // run "do-what-it-says" method within "liri" object
        liri.doWhatItSays();
        break;
    default:
        // if "type" is something else, console.log message
        console.log('Unable to process your request');
}