import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style/Home.css'

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Online Streaming</h1>
      </header>
      <main>
        <section>
          <h2>Popular Movies</h2>
          <div className="movie-list">
            <Link to="/movie-details/1" className="movie-link"> {/* Example link to movie details */}
              <div className="movie">
                <img src="movie1.jpg" alt="Movie 1" />
                <h3>Movie 1 Title</h3>
              </div>
            </Link>
            {/* Add more movie entries as needed */}
          </div>
        </section>
        <section>
          <h2>Popular TV Shows</h2>
          <div className="tv-show-list">
            {/* Similar structure for TV shows */}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Online Streaming</p>
      </footer>
    </div>
  );
};

export default Home;
