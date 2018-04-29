import React from "react";

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
        // console.log("state of MovieItem", this.state);
        // console.log("props", this.props);
        console.log(this.props);
        return (
            <div className="card" style={{ width: "100%", marginBottom: "15px" }}>
                <img
                    className="card-img-top"
                    style={{ width: '100%', maxHeight: '281px' }}
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <p>Rating: {item.vote_average}</p>
                    <p>Likes: {this.state.likeCount}</p>
                    <button
                        onClick={() => {

                            if (!this.state.likeCount) {
                                markMovieAsFavourited();
                            }

                            this.setState({
                                likeCount: ++this.state.likeCount
                            });
                        }}
                    >
                        Like
        </button>
                    <button
                        onClick={() => {
                            this.setState({
                                isShowOverview: true
                            });
                        }}
                    >
                        Show overview
          </button>
                    <button
                        onClick={() => {
                            this.setState({
                                isShowOverview: false
                            });
                        }}
                    >
                        Hide overview
          </button>
                    {this.state.isShowOverview ? <p>{item.overview}</p> : null}
                </div>
            </div>
        );
    }
}
