import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import MovieList from './MovieList';
import MovieInfoModal from '../MovieInfoModal';
import Navigation from './Navigation';
import { NOW_PLAYING_MOVIES_TYPE } from '../../utils';

export default class Movies extends Component {
  cookie = new Cookies();

  constructor() {
    super();

    this.state = {
      type: this.getInitTab(),
      favouritedMoviesCounter: 0,
      isLoaded: false,
      showModal: false,
      modalMovieId: null,
    };
  }

  markMovieAsFavourited = () => {
    this.setState(prevState => ({
      favouritedMoviesCounter: prevState.favouritedMoviesCounter + 1,
    }));
  };

  getInitTab = () => {
    return this.cookie.get('tab') || NOW_PLAYING_MOVIES_TYPE;
  };

  changeTab = tab => {
    this.cookie.set('tab', tab, {
      path: '/',
    });

    this.setState({
      type: tab,
    });
  };

  handleOpenModal = item => () => {
    this.setState({ showModal: true, modalMovieId: item.id });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { type, modalMovieId, showModal } = this.state;
    const { user, resetUser } = this.props;

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
          movieId={modalMovieId}
        />
      </div>
    );
  }
}
