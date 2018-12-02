import React, { Component } from 'react';

class Apiyells extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            dataloaded: false,
        }
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: [res.express], dataloaded : true }))
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
    
    render(){
        const { data, dataloaded,updatedData } = this.state;
        if (!dataloaded) {
            return(
            <div>
                <p>Data Has Not Loaded Yet ...</p>
            </div>
            )
          }
        return(
            <div>
                <h1>Yells loaded from Express:</h1>
                <h3>Id: {this.state.data[0].firstyell.id} </h3>
                <h3> Content: {this.state.data[0].firstyell.content}</h3>
            </div>
        )
    }
}

export default Apiyells;