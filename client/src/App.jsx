import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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

        setMovies(data.results);
      } catch (err) {
        console.error(err);
        setError("Movies fetch nahi ho rahi hain.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #071426 0%, #0b1d36 45%, #111b3a 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        style={{
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              margin: "10px 0",
              fontSize: "38px",
            }}
          >
            🎬 Movie Recommendation System
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#b8c4d9",
              marginBottom: "40px",
              fontSize: "16px",
            }}
          >
            Discover movies from TMDB
          </p>

          {loading && (
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Loading movies...
            </p>
          )}

          {error && (
            <p
              style={{
                textAlign: "center",
                color: "#ff6b6b",
              }}
            >
              {error}
            </p>
          )}

          {!loading && !error && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "28px",
              }}
            >
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  style={{
                    background: "#101f38",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      style={{
                        width: "100%",
                        height: "320px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "320px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#172947",
                        color: "#9caac0",
                      }}
                    >
                      No Poster
                    </div>
                  )}

                  <div style={{ padding: "18px" }}>
                    <h2
                      style={{
                        fontSize: "20px",
                        margin: "0 0 12px",
                        lineHeight: "1.3",
                      }}
                    >
                      {movie.title}
                    </h2>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          color: "#ffd166",
                          fontWeight: "bold",
                        }}
                      >
                        ⭐ {movie.vote_average.toFixed(1)}
                      </span>

                      <span
                        style={{
                          color: "#9caac0",
                          fontSize: "13px",
                        }}
                      >
                        {movie.vote_count.toLocaleString()} votes
                      </span>
                    </div>

                    <p
                      style={{
                        color: "#9caac0",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        marginBottom: "10px",
                      }}
                    >
                      {movie.release_date || "Release date unavailable"}
                    </p>

                    <p
                      style={{
                        color: "#c8d2e1",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        margin: 0,
                      }}
                    >
                      {movie.overview || "No overview available."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;