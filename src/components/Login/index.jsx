import React, { Component } from "react";
import { API_MOVIE_DB_URL, prepareGetParams, API_KEY_3 } from '../../utils';
import { Exception } from "handlebars";
import classNames from "classnames";

export default class LoginForm extends Component {

    constructor() {

        super();

        this.state = {
            username: '',
            password: '',
            passwordRepeat: '',
            errors: {

            }
        }
    }

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value,
            errors: {}
        });
    }

    onSubmit = event => {
        event.preventDefault();

        if (this.validateFields()) {
            const params = {
                'api_key': API_KEY_3
            };
            const { getUser } = this.props;

            // get the request token            
            fetch(`${API_MOVIE_DB_URL}/authentication/token/new?${prepareGetParams(params)}`)
                .then(response => response.json())
                .then(data => {
                    const { request_token } = data;

                    // check post authorization                    
                    fetch(`${API_MOVIE_DB_URL}/authentication/token/validate_with_login?${prepareGetParams({
                        api_key: API_KEY_3,
                        username: this.state.username,
                        password: this.state.password,
                        request_token: request_token
                    })}`).then(response => {
                        if (response.status < 400) {
                            return response.json();
                        } else {
                            throw new Exception("Invalid username and/or password");
                        }
                    }).then(data => {

                        // start session
                        fetch(
                            `${API_MOVIE_DB_URL}/authentication/session/new?${prepareGetParams({
                                api_key: API_KEY_3,
                                request_token: request_token
                            })}`
                        ).then(response => response.json())
                            .then(data => {
                                const { session_id } = data;

                                getUser(session_id);
                            });
                    }).catch(error => {
                        this.setState({
                            errors: {
                                global: error
                            }
                        });
                    });
                });
        }
    }

    validateFields() {
        let errorsArray = this.state.errors;

        Object.keys(this.state).forEach((field) => {
            if (field === 'errors') return;

            if (!this.state[field]) {
                errorsArray[field] = field[0].toUpperCase() + field.slice(1, field.length) + ' is empty';
            }
        });

        if (this.state.password !== this.state.passwordRepeat) {
            errorsArray.passwordRepeat = 'Passwords are not match';
        }

        if (Object.keys(errorsArray).length > 0) {
            this.setState({
                errors: errorsArray
            });
            return false;
        }

        return true;
    }

    render() {

        const { username, password, passwordRepeat, errors } = this.state;

        return (
            <div className="form-login-container">
                <form className="form-login">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className={classNames("form-control", {
                                invalid: errors.username || errors.global
                            })}
                            id="username"
                            name="username"
                            placeholder="Username"
                            ref="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </div>
                    {errors.username ? (<div className="invalid-feedback">{errors.username}</div>) : null}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className={classNames('form-control',
                                { invalid: errors.password || errors.global }
                            )}
                            id="password"
                            name="password"
                            placeholder="Password"
                            ref="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Repeat Password</label>
                        <input
                            type="password"
                            className={classNames("form-control", {
                                invalid: errors.passwordRepeat || errors.global
                            })}
                            id="repeat-password"
                            name="passwordRepeat"
                            placeholder="Repeat Password"
                            ref="passwordRepeat"
                            value={passwordRepeat}
                            onChange={this.handleChange}
                        />
                    </div>
                    {errors.passwordRepeat && (<div className="invalid-feedback">{errors.passwordRepeat}</div>)}
                    {errors.global && (<div className="invalid-feedback">{errors.global.message}</div>)}
                    <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.onSubmit}>
                        Sign in
          </button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.refs.username.focus();

        // document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
        //     event.preventDefault();

        //     console.log(this.refs.username.value);
        // });
    }

}