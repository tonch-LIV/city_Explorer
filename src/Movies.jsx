

function Movies(props) {
  return (
    <section>
      <h3>Movies</h3>

      {props.movies.map((movie) => (
        <div className="card p-3 mt-3" key={movie.title}>
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
          <p>Average Votes: {movie.average_votes}</p>
          <p>Total Votes: {movie.total_votes}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Released on: {movie.released_on}</p>

          <img
            src={movie.image_url}
            alt={`Poster for ${movie.title}`}
            className="img-fluid"
          />
        </div>
      ))}
    </section>
  );
} 

export default Movies;