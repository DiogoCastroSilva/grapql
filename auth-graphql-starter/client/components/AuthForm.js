import React, { Component } from 'react';


class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            email: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        const { value, name } = e.currentTarget;

        this.setState({
            [name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;

        this.props.onSubmit({ email, password });
    }

    render() {
        return (
            <div className="row">
                <form className="col s6" onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <input
                            placeholder="E-Mail"
                            name="email"
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;