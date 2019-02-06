import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log('updated the ' + name);
        this.setState({
            [name]: value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state.username.length);
        console.log(this.state.password.length);
        // if(this.state.username.length || this.state.password.length < 1){
        //     console.log('username or password are null');
        // }
    }

    render(){
        return(
            <div>
                <h1>Please Login</h1>
                <form onSubmit={this.onSubmit}>
                  <div>
                        <div>
                            <label>UserName:  </label>
                            <input 
                                name='username'
                                type="text" 
                                value={this.state.username}
                                onChange={this.handleInputChange} 
                                />
                        </div>
                        <div>
                            <label>Password:  </label>
                            <input 
                                name='password'
                                type="text" 
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                                />
                        </div>
                  </div>
                    <div>
                        <input type="submit" value="Register User"/>
                    </div>
                </form>               
            </div>
        )
    }
}

export default Login;