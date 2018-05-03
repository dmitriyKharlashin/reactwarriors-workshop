import React, {Component} from 'react';
import MovieList from './MovieList';
import MovieInfoModal from './MovieInfoModal';
import Navigation from './Navigation';
import {NOW_PLAYING_MOVIES_TYPE} from '../../utils';

export default class Movies extends Component {
  constructor () {
    super ();

    this.state = {
      type: NOW_PLAYING_MOVIES_TYPE,
      favouritedMoviesCounter: 0,
      isLoaded: false,
      showModal: false,
      expandedMovie: {},
    };
  }

  markMovieAsFavourited = () => {
    this.setState ({
      favouritedMoviesCounter: this.state.favouritedMoviesCounter + 1,
    });
  };

  changeTab = tab => {
    console.log ('tab changed!', tab);

    this.setState ({
      type: tab,
    });
  };

  handleOpenModal = item => () => {
    this.setState ({showModal: true, expandedMovie: item});
  };

  handleCloseModal = () => {
    this.setState ({showModal: false});
  };

  render () {
    const {type, expandedMovie, showModal} = this.state;
    const {user, resetUser} = this.props;

    return (
      <div>
        <Navigation
          user={user}
          resetUser={resetUser}
          type={type}
          changeTab={this.changeTab}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <MovieList type={type} handleOpenModal={this.handleOpenModal} />
            </div>
          </div>
        </div>
        <MovieInfoModal
          showModal={showModal}
          handleCloseModal={this.handleCloseModal}
          expandedMovie={expandedMovie}
        />
      </div>
    );
  }
}
