function initialize() {
  document.getElementById("display-button").addEventListener("click", sendRequest);
}

function sendRequest() {
  var xhr = new XMLHttpRequest();
  var query = encodeURI(document.getElementById("form-input").value);
  xhr.open("GET", "proxy.php?method=/3/search/movie&query=" + query);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      var json = JSON.parse(this.responseText);
      displaySearchResults(json.results);
    }
  };
  xhr.send(null);
}

function displaySearchResults(results) {
  var searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = ""; // Clear previous search results

  if (results.length === 0) {
    searchResultsDiv.innerHTML = "<p>No results found.</p>";
  } else {
    results.sort(function (a, b) {
      return new Date(a.release_date) - new Date(b.release_date);
    });

    var resultList = document.createElement("ul");

    results.forEach(function (movie) {
      var listItem = document.createElement("li");
      var movieTitle = document.createElement("span");
      var releaseDate = document.createElement("span");

      movieTitle.textContent = movie.title;
      releaseDate.textContent = " (" + movie.release_date + ")";

      listItem.appendChild(movieTitle);
      listItem.appendChild(releaseDate);

      listItem.addEventListener("click", function () {
        getMovieInfo(movie.id);
      });

      resultList.appendChild(listItem);
    });

    searchResultsDiv.appendChild(resultList);
  }
}


function displayMovieInfo(movieInfo) {
  var movieInfoDiv = document.getElementById("movie-info");
  movieInfoDiv.innerHTML = ""; // Clear previous movie info

  var movieTitle = document.createElement("h2");
  if(movieInfo.original_title!=movieInfo.title)
  {
      movieTitle.textContent = movieInfo.original_title + " (" + movieInfo.title + ")";
  }
  else
  {
    movieTitle.textContent=movieInfo.title;
  }

  var movieGenres = document.createElement("p");
  var genreNames = movieInfo.genres.map(function (genre) {
    return genre.name;
  }).join(", ");
  movieGenres.textContent = "Genres: " + genreNames;

  var movieOverview = document.createElement("p");
  movieOverview.textContent = "Overview: " + movieInfo.overview;

  var topCast = document.createElement("p");

  getTopCastMembers(movieInfo.id, function (castMembers) {
    topCast.textContent = "Top Cast: " + castMembers.join(", ");
    movieInfoDiv.appendChild(topCast);
  });

  var moviePoster = document.createElement("img");
  moviePoster.src = "http://image.tmdb.org/t/p/w185/" + movieInfo.poster_path;
  moviePoster.alt = movieInfo.original_title + " Poster";

  movieInfoDiv.appendChild(movieTitle);
  movieInfoDiv.appendChild(movieGenres);
  movieInfoDiv.appendChild(movieOverview);
  movieInfoDiv.appendChild(moviePoster);
}

function getMovieInfo(movieId) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "proxy.php?method=/3/movie/" + movieId);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      var movieInfo = JSON.parse(this.responseText);
      displayMovieInfo(movieInfo);
    }
  };
  xhr.send(null);
}

function getTopCastMembers(movieId, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "proxy.php?method=/3/movie/" + movieId + "/credits");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var credits = JSON.parse(xhr.responseText);
      var castMembers = credits.cast.slice(0, 5).map(function (castMember) {
        return castMember.name;
      });
      callback(castMembers);
    }
  };
  xhr.send(null);
}

initialize();
