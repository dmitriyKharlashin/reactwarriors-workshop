import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import Loader from "./Loader";
import {
    API_KEY_3,
    API_MOVIE_DB_URL,
    prepareGetParams
} from "../utils";

export default class MovieList extends Component {

    constructor() {

        super();

        this.state = {
            movies: [],
            isFetched: false
        }
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.type !== nextProps) {
            this.setState({
                isFetched: false
            })
            this.fetchMoviesData(nextProps.type);
        }

    }

    fetchMoviesData = type => {

        const params = {
            api_key: API_KEY_3,
            language: 'en-US',
            region: 'ua',
            page: 1
        }

        fetch(
            `${API_MOVIE_DB_URL}movie/${type}?${prepareGetParams(params)}`
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results,
                    isFetched: true
                });
            });
    }

    shouldComponentUpdate(prevProps, nextState) {

        console.log('shold component update');
        console.log('old state', this.state);
        console.log('new state', nextState);

        return true;
    }

    render() {
        const { movies, isFetched } = this.state;

        console.log('render');

        return (<div className="row">
            {
                isFetched ? (
                    movies.map(item => {
                        return (< div className="col-6"
                            key={
                                item.id
                            } >
                            <
                                MovieItem item={
                                    item
                                }
                            /> </div >
                        );
                    })
                ) : <Loader />
            } </div>
        )
    }

    componentDidMount() {

        this.fetchMoviesData(this.props.type);

    }
} 
