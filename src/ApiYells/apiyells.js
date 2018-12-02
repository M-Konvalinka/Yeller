import React, { Component } from 'react';
import styles from './apiyells.module.css'; // need to import css modules stylesheet as styles instead of just a sheet

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
        .then(res => this.setState({ data: res.express, dataloaded : true }))
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
        const { data, dataloaded } = this.state;
        // let dataDisplayed = null;
        if (!dataloaded) {
            console.log('data is not loaded yet, hitting the first if check')
            return(
            <div className={styles.Wrapper}>
                <p>Data Has Not Loaded Yet ...</p>
            </div>
            )
          }

        if (dataloaded){
            return(
                <div className={styles.Wrapper}>
                <h1>Here is the data recieved from Express:</h1>
                {data.map((yell) => {
                    return <div key={yell.id}>
                    <p className={styles.yellBorders}> The content of this yell is : ' {yell.content} ', the id of this yell is : ' {yell.id} ' </p>
                    </div>
                    })
                }
                </div> 
            )
        }
        // else{
        //     dataDisplayed = (
        //         <div>
        //         {this.state.data.map((yell) => {
        //             return <div key={yell.id}>
        //             <p> The content of this yell is : {yell.content}, the id of this yell is : {yell.id} </p>
        //             </div>
        //             })
        //         }
        //         </div>
        //     )
        //   }

        return(
            <div className={styles.Wrapper}>
            </div>
        )
    }
}

export default Apiyells;