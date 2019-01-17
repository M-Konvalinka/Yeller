import React, { Component } from 'react';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            confirmedpassword : '',
            email : '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangeConfirmedPassword.bind(this);
        this.onChangeConfirmedPassword = this.onChangeConfirmedPassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        console.log('the values being added are ' + e.target.value);

    }
    onChangeUserName(e){
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onChangeConfirmedPassword(e){
        this.setState({
            confirmedpassword: e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    

    render(){
        return(
            <div>
                <h1>Please register to continue</h1>
                <form onSubmit={this.onSubmit}>
                  <div>
                    <label>UserName:  </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUserName} 
                        />
                    <label>Password:  </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword} 
                        />
                    <label>Confirm Password:  </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={this.state.confirmedpassword}
                        onChange={this.onChangeConfirmedPassword} 
                        />
                    <label>Email:  </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail} 
                        />
                  </div>
                    <div>
                        <input type="submit" value="Register User"/>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Registration;