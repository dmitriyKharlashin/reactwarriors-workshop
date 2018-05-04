import React, { Component } from 'react';
import { API_MOVIE_IMAGE_URL } from '../../utils';

export default class MoviePoster extends Component {

    render() {
        const { className, item } = this.props;

        return (
            <img
                className={className}
                style={{ width: '100%', maxHeight: '281px' }}
                src={`${API_MOVIE_IMAGE_URL}w500${item.backdrop_path || item.poster_path}`}
                alt=""
            />
        );
    }
}
