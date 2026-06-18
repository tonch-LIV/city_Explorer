
function Movie(props) {
  return (
    <div className="card p-3 mt-3">
      <h4>{props.movie.title}</h4>
      <p>{props.movie.overview}</p>
      <p>Average Votes: {props.movie.average_votes}</p>
      <p>Total Votes: {props.movie.total_votes}</p>
      <p>Popularity: {props.movie.popularity}</p>
      <p>Released on: {props.movie.released_on}</p>

      {props.movie.image_url && (
        <img
          src={props.movie.image_url}
          alt={`Poster for ${props.movie.title}`}
          className="img-fluid"
        />
      )}
    </div>
  );
}

function Movies(props) {
  return (
    <section>
      <h3>Movies</h3>

      {props.movies.map((movie) => (
        <Movie movie={movie} key={movie.title} />
      ))}
    </section>
  );
} 

export default Movies;