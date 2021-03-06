import React, {Component} from 'react';
import {
  API_USER_AVATAR_URL,
  NOW_PLAYING_MOVIES_TYPE,
  POPULAR_MOVIES_TYPE,
  UPCOMING_MOVIES_TYPE,
} from '../../utils';
import classNames from 'classnames';

class Navigation extends Component {
  render () {
    const {user, resetUser, type, changeTab} = this.props;

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
            <li
              className={classNames ('nav-item', {
                active: type === NOW_PLAYING_MOVIES_TYPE,
              })}
            >
              <a
                className="nav-link"
                onClick={() => {
                  changeTab (NOW_PLAYING_MOVIES_TYPE);
                }}
              >
                Now playing <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className={classNames ('nav-item', {
                active: type === UPCOMING_MOVIES_TYPE,
              })}
            >
              <a
                className="nav-link"
                onClick={() => {
                  changeTab (UPCOMING_MOVIES_TYPE);
                }}
              >
                Upcoming <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className={classNames ('nav-item', {
                active: type === POPULAR_MOVIES_TYPE,
              })}
            >
              <a
                className="nav-link"
                onClick={() => {
                  changeTab (POPULAR_MOVIES_TYPE);
                }}
              >
                Popular <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <div className="d-flex align-items-center dropdown">
              <img
                width="40px"
                className="rounded-circle mr-2"
                src={`${API_USER_AVATAR_URL}${user.avatar.gravatar.hash}.jpg?s=64"`}
                alt=""
              />
              <a
                className="dropdown-toggle d-flex nav-link"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{cursor: 'pointer'}}
              >
                <h6 className="mb-0">{user.username}</h6>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  className="dropdown-item"
                  style={{cursor: 'pointer'}}
                  onClick={resetUser}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
