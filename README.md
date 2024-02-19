# Movie_Search
JavaScript

Problem Statement:

Develop a web application that utilizes the TMDb (The Movie Database) API to allow users to search for movies and view detailed information about selected movies, including their genres, overview, top cast members, and posters.

Objective:

The goal is to create a user-friendly interface where users can:

Enter a search query to find movies matching their criteria.
Display a list of search results sorted by release date.
View detailed information about a selected movie, including its title, genres, overview, top cast members, and poster image.
Functionality:

Search Functionality:
Implement a search feature that sends requests to the TMDb API to retrieve movies based on user input.
Display the search results sorted by release date in ascending order.
If no results are found, display a message indicating no results.
Display Movie Information:
Provide a detailed view of a selected movie, including its title, genres, overview, and poster image.
Display the original title alongside the translated title if available.
Retrieve and display the top cast members (up to 5) for the selected movie.
Display the movie's poster image fetched from the TMDb API.
Interaction:
Allow users to click on a movie from the search results to view its detailed information.
Ensure smooth interaction and responsiveness of the web application.
Approach:

Use JavaScript to handle user interactions and make asynchronous requests to the TMDb API.
Implement functions to handle searching for movies, displaying search results, retrieving detailed movie information, and fetching top cast members.
Ensure proper error handling for API requests and responses.
Design a clean and intuitive user interface for seamless navigation and information display.
Note:

This web application requires access to the TMDb API. Ensure proper API key management and adhere to usage policies.
Use HTML and CSS to structure and style the web application for a visually appealing user experience.
Example Scenario:

A user enters a search query for "Spider-Man" in the search input field. The application sends a request to the TMDb API and retrieves a list of Spider-Man movies sorted by release date. The user clicks on "Spider-Man: Homecoming" from the search results. The application fetches detailed information about the movie, including its title, genres, overview, top cast members (e.g., Tom Holland, Michael Keaton), and poster image. The user can then explore more movies or interact with other features of the application.
