import React, { Component } from 'react';
import styles from './apiyells.module.css'; // need to import css modules stylesheet as styles instead of just a sheet

class Apiyells extends Component{
    constructor(props) {
        super(props);
        this.onChangeYellContent = this.onChangeYellContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.callBackendAPI = this.callBackendAPI.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            newYell : '',
            data : [],
            dataloaded: false,
        }
    }

    onChangeYellContent(e){
        this.setState({
            newYell: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log('the yell content is ' + (this.state.newYell))
        var data = {yellContent : this.state.newYell}
        console.log('the variable data is ' + (JSON.stringify(data)))
        fetch('/yells', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error: ', error));
        this.setState({
            newYell: '',
        })
        this.callBackendAPI()
        .then(res => this.setState({ data : res.data , dataloaded : true }))
        .then(res => console.log(this.state.data))
        .catch(err => console.log(err));
    }

    onDelete(yell_id){
        console.log('hitting on the on delete function');
        console.log('/yells/delete/' + yell_id);
        var data = { id : yell_id}
        fetch('/yells/delete', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error: ', error));
        this.callBackendAPI()
        .then(res => this.setState({ data : res.data , dataloaded : true }))
        .then(res => console.log(this.state.data))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data : res.data , dataloaded : true }))
        .then(res => console.log(this.state.data))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/yells');
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
                <h1>Here is the data the Node Server recieved from MySQL :</h1>
                {data.map((yell) => {
                    return <div key={yell.id}>
                    <p className={styles.yellBorders}> 
                        The content of this yell is : ' {yell.yell} ', the creation of this yell occured at : ' {yell.created_at} ',
                        The id of the yell is : ' {yell.id} '
                        <button onClick={() => {this.onDelete(yell.id)}}>Delete Yell</button>
                     </p>
                </div>
                    })
                }
                <h3>Add New Yell</h3>
                <form onSubmit={this.onSubmit}>
                  <div>
                      <label>New Yell:  </label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={this.state.newYell}
                        onChange={this.onChangeYellContent} 
                        />
                  </div>
                    <div>
                        <input type="submit" value="Add Yell"/>
                    </div>
                    </form>
                </div> 
            )
        }

        return(
            <div className={styles.Wrapper}>
                <h1>The Yells Section is currently under Construction!</h1>
            </div>
        )
    }
}

export default Apiyells;