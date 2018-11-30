import React, { Component } from 'react';

class Apiyells extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
        this.consoleLogStateData = this.consoleLogStateData.bind(this);
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: [res.express] }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
      console.log(body);
      if (response.status !== 200) {
        console.log("there was an error")
        throw Error(body.message) 
      }
      return body;
    };

    consoleLogStateData(){
        console.log(this.state.data);
        console.log(this.state.data[0]);
        console.log(this.state.data[0][0]);
    }
    
    render(){
        
        return(
            <div>
                <h1>Apiyells component brought in here instead of having everything in the app.js file</h1>
                <button onClick={this.consoleLogStateData}>Show Apiyells' this.state.data in the c.log</button>
            </div>
        )
    }
}

export default Apiyells;