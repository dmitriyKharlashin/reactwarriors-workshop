import React, { Component } from 'react';
import MovieList from "./MovieList";
import Navigation from "./Navigation";

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            type: 'now_playing',
            favouritedMoviesCounter: 0,
            isLoaded: false,
        };

    }

    markMovieAsFavourited = () => {

        this.setState({
            favouritedMoviesCounter: this.state.favouritedMoviesCounter + 1
        });

    }

    changeTab = tab => {
        console.log('tab changed!', tab);

        this.setState({
            type: tab
        });

    }

    render() {
        const { type } = this.state;
        const { user, resetUser } = this.props;

        return (
            <div>
                <Navigation user={user} resetUser={resetUser} type={type} changeTab={this.changeTab} />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <MovieList type={type} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}