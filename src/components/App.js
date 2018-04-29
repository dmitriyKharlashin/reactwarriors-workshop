import React from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favouritedMoviesCounter: 0,
      isFetched: false
    };
  }

  componentDidMount() {
    // let link = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
    // link = link + API_KEY_3;
    // link = link + "&language=en-US&region=ru&page=1";
    // console.log(link);
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY_3}&language=en-US&region=ua&page=1`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({
            movies: data.results,
            isFetched: true
          });
        });
    }, 5000);
  }

  markMovieAsFavourited = () => {

    this.setState({
      favouritedMoviesCounter: ++this.state.favouritedMoviesCounter
    });
  }

  render() {
    // console.log("state of App", this.state);
    return (
      <div className="container">
        <div className="row">
          {this.state.isFetched ?
            <div className="card w-100 text-center">
              Favourited movies: {this.state.favouritedMoviesCounter}
            </div> :
            ""}
          {this.state.isFetched ? (
            this.state.movies.map(item => {
              return (
                <div className="col-6" key={item.id}>
                  <MovieItem item={item} markMovieAsFavourited={this.markMovieAsFavourited} />
                </div>
              );
            })
          ) : (
              <p>...Loading</p>
            )}
        </div>
      </div>
    );
  }
}

export default App;
