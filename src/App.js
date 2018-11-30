import React, { Component } from 'react';
import styles from './App.module.css'; // need to import css modules stylesheet as styles instead of just a sheet
import Yells from './Yells/yells';
import Navigation from './Navigation/navigation';
import './Navigation/navigation.css';
import PersonalInfo from './PersonalInfo/personalinfo';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yells : [
                { id: 1, content: 'first yell'}, { id: 2, content: 'second yell'}, 
                { id: 3, content: 'third yell'}, { id: 4, content: 'fourth yell'},
                { id: 5, content: 'fifth yell'}, { id: 6, content: 'sixth yell'},
                { id: 7, content: 'seventh yell'}, { id: 8, content: 'eight yell'},
                { id: 9, content: 'ninth yell'}, { id: 10, content: 'tenth yell'}
              ],
      showYells: false,
      defaultYell: 'Type here whats on your mind',
      newYell: [],
      numberOfYells: 10,
      data: [],
      yellsFromApi: [],
    };

    

    this.handleChange = this.handleChange.bind(this);
    this.addYellHandler = this.addYellHandler.bind(this);
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

  deleteYellHandler = (yellIndex) => {
    const yells = [...this.state.yells];
    yells.splice(yellIndex, 1);
    this.setState({yells: yells})
  }

  
handleChange = (event) => {
  this.setState({defaultYell: event.target.value});
  console.log("default yell looks like this" + this.state.defaultYell);
}

  addYellHandler = (event) => {
    // increaseYellCount();
    const yells = [...this.state.yells];
    console.log('new yell content was added:' + this.state.defaultYell);
    console.log("the current state of the yell count is " + this.state.numberOfYells);
    var numberOfYellsX = (this.state.numberOfYells + 1);
    console.log("the # of yells in line 47 is :" + numberOfYellsX + "<--- this should be 11");
    this.setState({numberOfYells: numberOfYellsX});
    console.log('the new number of yells are: ' + numberOfYellsX + "<-- this should now be 11 as well");
    var newYellToBeAdded = {content : this.state.defaultYell, id : numberOfYellsX};
    console.log("the new yell object to be added to the array of yells is: " + JSON.stringify(newYellToBeAdded));
    yells.push(newYellToBeAdded);
    this.setState({yells: yells});
    event.preventDefault();
  }



  showYellState = (event) => {
    console.log("the number of yells at this point after the async call are" + this.state.numberOfYells)
  }

  // handleChange(event) {
//   this.setState({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }

  toggleYellHandler = () => {
    const doesShow = this.state.showYells;
    this.setState({showYells: !doesShow});
  }
  render() {
    //lines below is just to test accessing the json data coming back from api endpoint
    console.log("data looks like this" + this.state.data);
    let yells = null;

    const apiYells = this.state.data;
    console.log(apiYells);

    if (this.state.showYells){
      yells = (
        <div className={styles.YellsInformationPart2}>
        {/* className={`${styles.h5Test} ${styles.yellInformation}`} */}
          {this.state.yells.map((yell, index, numberOfYells) => {
            return <Yells
            click={() => this.deleteYellHandler(index)}
            content={yell.content}
            key={yell.id}
            id={yell.id}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <Navigation />
        <div className={styles.CenteredDivs}>
        <PersonalInfo className='personalInfo' />
        <div className={styles.Wrapper}>
        <form onSubmit={this.addYellHandler}>
            <label>
              What are you thinking?
                <input type="text" value={this.state.defaultYell} onChange={this.handleChange}/>
            </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <input type='text'></input><button onClick={this.addYellHandler}>Add Yell</button> */}
        <button 
           className='buttonStyling' onClick={this.toggleYellHandler}>Show Yells</button>
        {yells}
        </div>
        </div>
        {/* <h3>
        <ul>
        <div className="container">
      {apiYells.map(function(d, index){
        return (
          <div>
           <li key={index}>{d.apiYells[0].id}</li>
           <li key={index}>{d.apiYells[0].content}</li>
          </div>
        )
       })}
          </div>
        {Object.keys(this.state.data).map(data =>
          <li key={data.id}>{data.content}</li>
        )}
        </ul>
        </h3> */}
      </div>
    );
  }

 }  



export default App;
