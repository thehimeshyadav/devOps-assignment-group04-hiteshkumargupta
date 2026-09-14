import { useState } from "react";
import "./MovieSearch.css";

function MovieSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a movie name.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchQuery
        )}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      setMovies(data.results || []);

      if (!data.results || data.results.length === 0) {
        setError("No movies found.");
      }
    } catch (err) {
      console.error(err);
      setError("Movies search nahi ho rahi hain.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies();
    }
  };

  return (
    <section className="movie-search">
      <div className="search-container">
        <h2>🔍 Search Movies</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={searchMovies}>Search</button>
        </div>

        {loading && <p className="search-message">Searching movies...</p>}

        {error && <p className="search-error">{error}</p>}

        {!loading && movies.length > 0 && (
          <div className="search-results">
            {movies.map((movie) => (
              <div className="search-movie-card" key={movie.id}>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <div className="no-poster">No Poster</div>
                )}

                <div className="search-movie-info">
                  <h3>{movie.title}</h3>

                  <p>
                    ⭐{" "}
                    {movie.vote_average
                      ? movie.vote_average.toFixed(1)
                      : "N/A"}
                  </p>

                  <p>
                    {movie.release_date || "Release date unavailable"}
                  </p>

                  <p className="movie-overview">
                    {movie.overview || "No overview available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MovieSearch;