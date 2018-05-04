import React, { Component } from 'react';
import ReactModal from 'react-modal';
import MoviePoster from '../Movies/MoviePoster';
import Loader from '../Loader';
import { API_KEY_3, MOVIE_OVERVIEW_LANG, API_MOVIE_DB_URL, prepareGetParams } from '../../utils';

export default class MovieInfoModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {},
            isFetched: false
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.movieId !== this.props.movieId) {
            this.setState({
                isFetched: false,
            });

            this.fetchMovieData(nextProps.movieId);
        }

    }

    fetchMovieData(movieId) {
        const params = {
            api_key: API_KEY_3,
            language: MOVIE_OVERVIEW_LANG
        };

        fetch(`${API_MOVIE_DB_URL}movie/${movieId}?${prepareGetParams(params)}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movie: data,
                    isFetched: true,
                });
            });
    }

    render() {
        const { movieId, showModal, handleCloseModal } = this.props;
        const { movie, isFetched } = this.state;

        return (
            <div id="movieInfoModal" className="modal">
                {!isFetched ?
                    <Loader /> :
                    <ReactModal
                        isOpen={showModal}
                        appElement={document.getElementById('root')}
                        contentLabel="onRequestClose Example"
                        onRequestClose={handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                paddingTop: '100px',
                                overflow: 'auto',
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            },
                            content: {
                                position: 'relative',
                                backgroundColor: '#fefefe',
                                margin: 'auto',
                                padding: '0',
                                border: '1px solid #888',
                                width: '80%',
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                animationName: 'animatetop',
                                animationDuration: '0.4s',
                                WebkitOverflowScrolling: 'touch',
                            },
                        }}
                    >
                        <div className="modal-header">
                            <h4 className="text-center">
                                {movie.title} {movie.original_title != movie.title ? `(${movie.original_title})` : null
                                }
                            </h4>
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row mb-2 mt-2">
                                    <MoviePoster className="col-5" item={movie} />
                                    <div className="col-7">
                                        <p>{movie.overview}</p>
                                        <p>
                                            <b>Original language:</b> {movie.original_language}
                                        </p>
                                        <p>
                                            <b>Rating:</b> {movie.vote_average}
                                        </p>
                                        <p>
                                            <b>Release date:</b> {movie.release_date}
                                        </p>
                                    </div>
                                </div>
                                <div className="row mb-2 mt-2">

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer" />
                    </ReactModal>}
            </div>
        );
    }
}
