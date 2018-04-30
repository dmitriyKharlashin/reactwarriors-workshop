import React, { Component } from "react";
import MovieList from "./MovieList";
import MovieTabs from "./MovieTabs";
import LoginForm from './Login';
import Loader from "./Loader";
import { API_MOVIE_DB_URL, prepareGetParams, API_KEY_3 } from '../utils';
import Cookies from 'universal-cookie';

class App extends Component {
  constructor() {
    super();


    this.state = {
      type: 'now_playing',
      favouritedMoviesCounter: 0,
      isLoaded: false,
      user: null,
      session_id: null
    };

  }

  componentWillMount() {
    const cookie = new Cookies();
    const session_id = cookie.get('session_id');

    if (session_id !== null && session_id !== undefined) {
      this.getUser(session_id);
    } else {
      this.setState({
        isLoaded: true
      });
    }
  }

  markMovieAsFavourited = () => {

    this.setState({
      favouritedMoviesCounter: ++this.state.favouritedMoviesCounter
    });

  }

  changeTab = tab => {
    console.log('tab changed!', tab);

    this.setState({
      type: tab
    });

  }

  getUser = session_id => {
    if (!session_id) return;

    const cookie = new Cookies();
    cookie.set('session_id', session_id, { path: '/' });
    this.setState({
      session_id: session_id
    });

    const params = {
      api_key: API_KEY_3,
      session_id: session_id
    };

    fetch(
      `${API_MOVIE_DB_URL}account?${prepareGetParams(params)}`
    )
      .then(response => response.json())
      .then(data => {
        this.updateUser(data);
      });
  }

  updateUser = user => {
    this.setState({
      user: user,
      isLoaded: true
    })
  }

  render() {
    const { type, session_id, user, isLoaded } = this.state;
    return (
      <div>
        {!isLoaded ?
          <Loader /> :
          (user ? (
            <div className="container" >
              <MovieTabs type={type} changeTab={this.changeTab} />
              <MovieList type={type} />
            </div>
          ) : (
              <LoginForm getUser={this.getUser} />
            ))
        }
      </div>
    );
  }
}

export default App;
