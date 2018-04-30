import React, { Component } from "react";
import { API_USER_AVATAR_URL } from '../../utils';
import classNames from 'classnames';

class Navigation extends Component {
  render() {
    const { user, resetUser, type, changeTab } = this.props;

    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary navigation">
        <a className="navbar-brand">MovieApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={classNames('nav-item', {
              active: type === 'now_playing'
            })}>
              <a className="nav-link" onClick={() => {
                changeTab('now_playing');
              }}>
                Now playing <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={classNames('nav-item', {
              active: type === 'upcoming'
            })}>
              <a className="nav-link" onClick={() => {
                changeTab('upcoming');
              }}>
                Upcoming <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={classNames('nav-item', {
              active: type === 'popular'
            })}>
              <a className="nav-link" onClick={() => {
                changeTab('popular');
              }}>
                Popular <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <div className="d-flex align-items-center dropdown">
              <img
                width="40px"
                className="rounded-circle mr-2"
                src={`${API_USER_AVATAR_URL}${
                  user.avatar.gravatar.hash
                  }.jpg?s=64"`}
                alt=""
              />
              <a className="dropdown-toggle d-flex nav-link" href id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <h6 className="mb-0">{user.username}</h6>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href onClick={resetUser}>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
