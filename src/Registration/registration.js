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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.password !== this.state.confirmedpassword){
            console.log('The password and the confirmed passwords are different!')
        }else{
            const user = {
                username : this.state.username,
                password : this.state.password,
                email : this.state.email,
            }
            console.log('the user object passed to the server is' + JSON.stringify(user));
            fetch('/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error: ', error));
            this.setState({
                username : '',
                password : '',
                confirmedpassword : '',
                email : '',
            })
            this.props.history.push('/login');
        }
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
    

    render(){
        return(
            <div>
                <h1>Please register to continue</h1>
                <form onSubmit={this.onSubmit}>
                  <div>
                        <div>
                            <label>UserName:  </label>
                            <input 
                                name='username'
                                type="text" 
                                // className="form-control"
                                value={this.state.username}
                                onChange={this.handleInputChange} 
                                />
                        </div>
                        <div>
                            <label>Password:  </label>
                            <input 
                                name='password'
                                type="text" 
                                 // className="form-control"
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                                />
                        </div>
                        <div>
                            <label>Confirm Password:  </label>
                            <input 
                                name='confirmedpassword'
                                type="text" 
                                // className="form-control"
                                value={this.state.confirmedpassword}
                                onChange={this.handleInputChange} 
                                />
                        </div>
                        <div>
                            <label>Email:  </label>
                            <input 
                                name='email'
                                type="text" 
                                // className="form-control"
                                value={this.state.email}
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

export default Registration;