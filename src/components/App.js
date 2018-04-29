import React from "react";
import MovieList from "./MovieList";
import MovieTabs from "./MovieTabs";
import LoginForm from './LoginForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'now_playing',
      favouritedMoviesCounter: 0,
      user: null,
      session_id: null
    };
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

  render() {
    const { type, session_id } = this.state;
    return (
      <div>
        {session_id ? (
          <div className="container">
            <button
              onClick={() => {
                this.forceUpdate();
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                this.setState({
                  showList: false
                });
              }}
            >
              Hide list
            </button>
            <MovieTabs type={type} changeTab={this.changeTab} />
            {this.state.showList ? <MovieList type={type} /> : null}
          </div>
        ) : (
            <LoginForm />
          )}
      </div>
    );
  }
}

export default App;
