import React, { Component } from 'react';

class Apiyells extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            dataloaded: false,
            updatedData: [],
        }
        this.consoleLogStateData = this.consoleLogStateData.bind(this);
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: [res.express], dataloaded : true }))
        .then(res => this.setState({updatedData: [this.state.data[0].content]}))
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

    cLogUpdatedData(){
        console.log('updated data is :' + this.state.data);
    }

    consoleLogStateData(){
        // this.setState({dataloaded : true});
        console.log(this.state.data);
        console.log(this.state.data[0]);
        console.log(this.state.data[0].firstyell);
        const aSingleYell = (this.state.data[0].firstyell.content);
        const yellsToShow = (this.state.data[0]);
        console.log('the variable is : ' + yellsToShow);
        console.log(yellsToShow.firstyell);
        console.log('the keys are : ' + Object.keys(yellsToShow));
        Object.keys(yellsToShow).map((d) => {
            return(
                <div>
                    {aSingleYell}
                </div>
            )
        })
        // for (var key in validation_messages) {
        //     // skip loop if the property is from prototype
        //     if (!validation_messages.hasOwnProperty(key)) continue;
        
        //     var obj = validation_messages[key];
        //     for (var prop in obj) {
        //         // skip loop if the property is from prototype
        //         if(!obj.hasOwnProperty(prop)) continue;
        
        //         // your code
        //         alert(prop + " = " + obj[prop]);
        //     }
        // }
        // render() {
        //     console.log(this.state.myPosts);
        
        //     const data = this.state.myPosts;
        
        //     const display = Object.keys(data).map((d, key) => {
        //     return (
        //       <div className="my-posts">
        //         <li key={key}>
        //           {data.current_route}
                  
        //          data.content.Object.keys.map((d, key) => {
        //               //somehow get around the React object error and display content in here
        //          });
        
        //         </li>
        //       </div>
        //       );
        //     });
        
        //     return(
        //       <div>
        //         <ul>
        //           { display }
        //         </ul>
        //       </div>
        //     );
    }
    
    render(){
        // const yellsToShow = (this.state.data[0]);
        // console.log('the variable is : ' + yellsToShow);
        // console.log(yellsToShow.firstyell);
        // console.log('the keys are : ' + Object.keys(yellsToShow));
        // const yellsOnThePage = Object.keys(yellsToShow).map((d) => {
        //     return(
        //         <div>
        //             {d.content}
        //             console.log({d.content});
        //         </div>
        //     )
        // })
        const { data, dataloaded,updatedData } = this.state;
        if (!dataloaded) {
            return(
            <div>
                <p>Data Has Not Loaded Yet ...</p>
                {/* <button onClick={this.consoleLogStateData}>Click Here to load the data</button> */}
            </div>
            )
          }
        return(
            <div>
                <h1>Data has loaded</h1>
                <button onClick={this.consoleLogStateData}>Show Apiyells' this.state.data in the c.log</button>
                {this.state.updatedData[0]}
            </div>
        )
    }
}

export default Apiyells;