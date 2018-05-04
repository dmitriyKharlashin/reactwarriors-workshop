import React from 'react';
import { API_MOVIE_IMAGE_URL } from '../../utils';
import MoviePoster from './MoviePoster';

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeCount: 0,
      isShowOverview: false,
    };
  }

  render() {
    const {
      item = {},
      markMovieAsFavourited = () => { },
      handleOpenModal = () => { },
    } = this.props;

    return (
      <div className="card" style={{ width: '100%', marginBottom: '15px' }}>
        <MoviePoster className="card-image-top" item={item} />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p>Rating: {item.vote_average}</p>
            <p>Likes: {this.state.likeCount}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-sm btn-primary"
              onClick={handleOpenModal(item)}
            >
              More
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                if (!this.state.likeCount) {
                  markMovieAsFavourited();
                }

                this.setState(prevState => ({
                  likeCount: prevState.likeCount + 1,
                }));
              }}
            >
              Like
            </button>
          </div>
        </div>
      </div>
    );
  }
}
