import React from "react";
import { API_MOVIE_IMAGE_URL } from '../../utils';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likeCount: 0,
            isShowOverview: false
        };
    }

    render() {
        const { item = {}, markMovieAsFavourited = () => { } } = this.props;

        return (
            <div className="card" style={{ width: "100%", marginBottom: "15px" }}>
                <img
                    className="card-img-top"
                    style={{ width: '100%', maxHeight: '281px' }}
                    src={`${API_MOVIE_IMAGE_URL}w500${item.backdrop_path || item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Rating: {item.vote_average}</p>
                        <p>Likes: {this.state.likeCount}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm btn-primary"
                            onClick={() => {
                                this.setState({
                                    isShowOverview: !this.state.isShowOverview
                                });
                            }}
                        >
                            {!this.state.isShowOverview ? 'More' : 'Less'}
                        </button>
                        <button className="btn btn-sm btn-primary"
                            onClick={() => {

                                if (!this.state.likeCount) {
                                    markMovieAsFavourited();
                                }

                                this.setState({
                                    likeCount: this.state.likeCount + 1
                                });
                            }}
                        >
                            Like
        </button>
                    </div>
                    {this.state.isShowOverview ? <p>{item.overview}</p> : null}
                </div>
            </div>
        );
    }
}
