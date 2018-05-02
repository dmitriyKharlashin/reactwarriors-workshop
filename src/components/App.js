import React, {Component} from 'react';
import Movies from './Movies';
import LoginForm from './Login';
import Loader from './Loader';
import {API_MOVIE_DB_URL, prepareGetParams, API_KEY_3} from '../utils';
import Cookies from 'universal-cookie';
import moment from 'moment';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      isLoaded: false,
      user: null,
      session_id: null,
    };
  }

  componentWillMount () {
    const cookie = new Cookies ();
    const session_id = cookie.get ('session_id');

    if (session_id !== null && session_id !== undefined) {
      this.getUser (session_id);
    } else {
      this.setState ({
        isLoaded: true,
      });
    }
  }

  getUser = session_id => {
    if (!session_id) return;

    const cookie = new Cookies ();
    const expirationDate = moment ().add ('30', 'minutes');
    cookie.set ('session_id', session_id, {
      path: '/',
      expires: expirationDate.toDate (),
    });
    this.setState ({
      session_id: session_id,
    });

    const params = {
      api_key: API_KEY_3,
      session_id: session_id,
    };

    fetch (`${API_MOVIE_DB_URL}account?${prepareGetParams (params)}`)
      .then (response => response.json ())
      .then (data => {
        this.updateUser (data);
      });
  };

  updateUser = user => {
    this.setState ({
      user: user,
      isLoaded: true,
    });
  };

  resetUser = user => {
    this.setState ({
      user: null,
      session_id: null,
    });

    const cookie = new Cookies ();
    const expirationDate = moment ().subtract ('30', 'minutes');
    cookie.set ('session_id', this.state.session_id, {
      path: '/',
      expires: expirationDate.toDate (),
    });
  };

  render () {
    const {user, isLoaded} = this.state;

    return (
      <div>
        {!isLoaded
          ? <Loader />
          : user
              ? <Movies user={this.state.user} resetUser={this.resetUser} />
              : <LoginForm getUser={this.getUser} />}
      </div>
    );
  }
}

export default App;
