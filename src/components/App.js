import React, {
  Component
} from "react";
import MovieItem from "./MovieItem";
import Loader from "./Loader";
import {
  API_KEY_3,
  API_MOVIE_ENDPOINT
} from "../utils";

class App extends Component {

  constructor() {
    super();

    this.state = {
      isFetched: false,
      movie: {}
    };
  }

  componentDidMount() {
    const language = 'en-EN';
    const region = 'ua';
    const movieId = 299536;
    const apiEndPoint = `${API_MOVIE_ENDPOINT}${movieId}`;

    const link = `${apiEndPoint}?api_key=${API_KEY_3}&language=${language}&region=${region}}`

    fetch(`${link}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // update this.state.movie, this.state.isFetched
        this.setState({
          isFetched: true,
          movie: data
        });
      });
  }

  render() {
    return (<div className="container" >
      <div className="row" > {
        this.state.isFetched ?
          <MovieItem item={
            this.state.movie
          }
            key={
              this.state.movie.id
            }
          /> : <Loader />
      }

      </div>
    </ div>
    );
  }
}

export default App;
