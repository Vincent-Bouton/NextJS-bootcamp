//DATE : 10/13/20
import fetch from "isomorphic-unfetch";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.movie_title}</div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();
  return {
    props: {
      movies: data,
    },
  };
}
