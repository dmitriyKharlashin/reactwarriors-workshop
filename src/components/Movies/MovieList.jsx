import React, {Component} from 'react';
import MovieItem from './MovieItem';
import Loader from '../Loader';
import {
  API_KEY_3,
  API_MOVIE_DB_URL,
  prepareGetParams,
  MOVIE_OVERVIEW_LANG,
  MOVIES_RATE_REGION,
} from '../../utils';

export default class MovieList extends Component {
  constructor () {
    super ();

    this.state = {
      movies: [],
      isFetched: false,
    };
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.type !== nextProps) {
      this.setState ({
        isFetched: false,
      });
      this.fetchMoviesData (nextProps.type);
    }
  }

  fetchMoviesData = type => {
    const params = {
      api_key: API_KEY_3,
      language: MOVIE_OVERVIEW_LANG,
      region: MOVIES_RATE_REGION,
      page: 1,
    };

    fetch (`${API_MOVIE_DB_URL}movie/${type}?${prepareGetParams (params)}`)
      .then (response => {
        return response.json ();
      })
      .then (data => {
        this.setState ({
          movies: data.results,
          isFetched: true,
        });
      });
  };

  render () {
    const {movies, isFetched} = this.state;
    const {handleOpenModal} = this.props;

    return (
      <div className="row">
        {isFetched
          ? movies.length > 0
              ? movies.map (item => {
                  return (
                    <div className="col-4 mb-4" key={item.id}>
                      <MovieItem
                        item={item}
                        handleOpenModal={handleOpenModal}
                      />
                    </div>
                  );
                })
              : <h1>No data</h1>
          : <Loader />}
      </div>
    );
  }

  componentDidMount () {
    this.fetchMoviesData (this.props.type);
  }
}
