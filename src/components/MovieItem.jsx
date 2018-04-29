import React, { Component } from 'react';
import { API_MOVIE_IMAGE_ENDPOINT } from '../utils';

export default class MovieItem extends Component {

    constructor() {
        super();

        this.state = {
            isOverviewVisible: false
        }
    }

    onClick = () => {

        this.setState({
            isOverviewVisible: !this.state.isOverviewVisible
        })
    }

    render() {

        const { item = {} } = this.props;

        return (
            <div class="card-group">
                <div className="card w-50">
                    <img
                        className="card-img-top"
                        src={`${API_MOVIE_IMAGE_ENDPOINT}${item.backdrop_path}`}
                        alt=""
                    />
                    <div className="card-body">
                        <h6 className="card-title">{item.title}</h6>
                        <p>Rating: {item.vote_average}</p>
                        <button className="btn btn-sm btn-primary" onClick={this.onClick}>
                            Show/Hide overview
                        </button>
                    </div>

                </div>
                {this.state.isOverviewVisible ?
                    <div className="card w-50">
                        <div className="card-body">

                            <div className="card-text">
                                <p>{item.overview}</p>
                            </div>
                        </div>

                    </div>
                    : ""}
            </div>
        );
    }
}
