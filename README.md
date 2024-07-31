<!-- Movie Search Application -->
#Objective
This React application allows users to search for movies using the OMDb API and displays the results in a user-friendly interface.

#Features
Search Bar: Users can enter a search term to find movies.
Movie List: Displays a list of movies based on the search results.
Movie Card: Shows individual movie details such as title, poster, and release year.
Pagination: Navigate through pages of movie results.
Detailed View: Click on a movie card to view more detailed information about the movie.

#Technologies Used
React
Redux
Axios
Bootstrap
React Router DOM

#Project Setup
Clone the repository:

git clone <repository-url>
cd movie-app
Install dependencies:


npm install
Start the application:

npm start
The application will be available at http://localhost:3000.

Components
Navbar: Provides navigation and a search bar.
SearchPage: Displays search results and allows pagination.
MovieList: Shows a list of movies with pagination controls.
MovieCard: Displays individual movie details.
MovieDetailPage: Shows detailed information about a selected movie.
PopularPage: Displays popular movies.
TopRatedPage: Displays top-rated movies.
UpComingMovie: Displays upcoming movies.
NotFoundPage: Displays a 404 error message for unmatched routes.
API Integration
The application uses the OMDb API to fetch movie data. An API key is required.

##API Key
Replace the API_KEY in actions/movieActions.js with your own OMDb API key:


const API_KEY = 'your_api_key_here';
State Management
The application uses Redux for state management. Key actions include:

fetchPopularMovies(page) - Fetches popular movies.
fetchTopRatedMovies(page) - Fetches top-rated movies.
fetchUpcomingMovies(page) - Fetches upcoming movies.
fetchMovie(id) - Fetches details for a specific movie.
searchMovies(searchTerm) - Searches for movies by title.
Styling
Basic styling is applied using Bootstrap for responsive design. Custom styles are defined in CSS files.

Error Handling
API Errors: Handles cases where the API request fails or returns no results.
Empty Search Results: Displays a message if no movies are found for the search term.