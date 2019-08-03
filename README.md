# LIRI Bot

## Links
https://github.com/liz-guenthner/liri-node-app

https://github.com/liz-guenthner/lizGuenthnerResume

https://liz-guenthner.github.io/lizGuenthnerResume/

## Overview

Node application for command line that scrapes OMDB, Bands in Town and Spotify API's. The app is triggered by user input and displays data from each API within the terminal. Uses axios, moment, dotenv, node-spotify-api and fs npm packages.


## Organization

1. `package.json` file is required for installing third party npm packages and saving their version numbers.

2. `.gitignore` file will tell git not to track these files, and thus they won't be committed.

3. `keys.js` and `.env` files store credentials for spotify API.

4. `.env` file used by `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private.

5. `random.txt` file stores string for `do-what-it-says` function.

6. `liri.js` file stores all the commands based on user input to call the functions within `liriCommand.js`.

7. `liriCommand.js` file stores all the functions based on user input.


## API's and NPM packages

   * [OMDB API](http://www.omdbapi.com)
   
   * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Spotify API](https://developer.spotify.com/)   

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)


## Instructions

1. Open project folder `/liri-node-app` in command line application

2. Run one of four commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

3. What each command should do:

   * `node liri.js concert-this <artist/band name here>`

        * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

              * Name of the venue

              * Venue location

              * Date of the Event (use moment to format this as "MM/DD/YYYY")

   * `node liri.js spotify-this-song <song name here>`

        * This will show the following information about the song in your terminal/bash window:

              * Artist(s)

              * The song's name

              * A preview link of the song from Spotify

              * The album that the song is from

        * If no song is provided then your program will default to "The Sign" by Ace of Base.

   * `node liri.js movie-this <movie name here>`

        * This will output the following information to your terminal/bash window:

              * Title of the movie.

              * Year the movie came out.

              * IMDB Rating of the movie.

              * Rotten Tomatoes Rating of the movie.

              * Country where the movie was produced.

              * Language of the movie.
              
              * Plot of the movie.

              * Actors in the movie.

        * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

   * `node liri.js do-what-it-says`

        * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

        * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

        * Edit the text in random.txt to test out the feature for movie-this and concert-this.


## Screenshots

   1. [concertThis](https://github.com/liz-guenthner/liri-node-app/blob/master/1-concert-this.jpg)
   
   * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Spotify API](https://developer.spotify.com/)   

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)