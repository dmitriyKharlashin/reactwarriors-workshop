import React, { Component } from "react";

export default class LoginForm extends Component {

    constructor() {

        super();

        this.state = {
            name: null,
            password: '',
            passwordRepeat: '',
            errors: {

            }
        }
    }

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value,
            errors: {
                passwordRepeat: false
            }
        });
    }

    onSubmit = event => {
        event.preventDefault();

        if (this.state.password !== this.state.passwordRepeat) {
            this.setState({
                errors: {
                    passwordRepeat: true
                }
            });
        } else {
            fetch()
        }
    }

    render() {
        return (
            <div className="form-login-container">
                <form className="form-login">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                            ref="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className='form-control'
                            id="password"
                            name="password"
                            placeholder="Password"
                            ref="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Repeat Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="repeat-password"
                            name="passwordRepeat"
                            placeholder="Repeat Password"
                            ref="passwordRepeat"
                            value={this.state.passwordRepeat}
                            onChange={this.handleChange}
                        />
                    </div>
                    {this.state.errors.passwordRepeat ? <div className="invalid-feedback">Passwords are not match</div> : null}
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