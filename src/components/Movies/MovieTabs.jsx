import React, { Component } from 'react';

export default class MovieTabs extends Component {

    render() {

        const { type, changeTab } = this.props;

        return (<ul className="tabs nav nav-pills">
            <li className="nav-item">
                <div className={type === 'now_playing' ? "nav-link active" : "nav-link"}
                    onClick={() => {
                        changeTab('now_playing');
                    }}>
                    Now playing
    </div>
            </li>
            <li className="nav-item">
                <div className={type === 'upcoming' ? "nav-link active" : "nav-link"} onClick={() => {
                    changeTab('upcoming');
                }}>
                    Upcoming
    </div>
            </li>
            <li className="nav-item">
                <div className={type === 'popular' ? "nav-link active" : "nav-link"} onClick={() => {
                    changeTab('popular');
                }}>
                    Popular
    </div>
            </li>
        </ul>
        )
    }
}