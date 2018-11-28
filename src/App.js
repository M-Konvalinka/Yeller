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
      newYell: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.addYellHandler = this.addYellHandler.bind(this);
  }
  

  deleteYellHandler = (yellIndex) => {
    const yells = [...this.state.yells];
    yells.splice(yellIndex, 1);
    this.setState({yells: yells})
  }

  
handleChange = (event) => {
  this.setState({defaultYell: event.target.value});
}

  addYellHandler = (event) => {
    const yells = [...this.state.yells];
    alert('A new yell was added: ' + this.state.defaultYell);
    this.setState({newYell : {content: (this.state.defaultYell)}});
    console.log("the entire new yell being added is " + this.state.newYell);
    yells.push(this.state.defaultYell);
    this.setState({yells: yells});
    event.preventDefault();
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

    let yells = null;

    if (this.state.showYells){
      yells = (
        <div>
          {this.state.yells.map((yell, index) => {
            return <Yells
            click={() => this.deleteYellHandler(index)}
            content={yell.content}
            key={yell.id}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <Navigation />
        <PersonalInfo className='personalInfo' />
        <form onSubmit={this.addYellHandler}>
          <label>
              What are you thinking?
                <input type="text" value={this.state.defaultYell} onChange={this.handleChange}/>
          </label>
        <input type="submit" value="Submit" />
        </form>
        {/* <input type='text'></input><button onClick={this.addYellHandler}>Add Yell</button> */}
        <h5 className={styles.h5Test}> this info is purple and bold due to the 'h5Test' in app.module.css</h5>
        <h2>Below is the dummy Data, which is now green and bold due to 'h5Test' in  yells.module.css</h2>
        <button 
          onClick={this.toggleYellHandler}>Show Yells</button>
        {yells}
      </div>
    );
  }

 }  
//  constructor(props) {
//   super(props);
//   this.state = {value: ''};

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {
//   this.setState({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }

// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={this.state.value} onChange={this.handleChange} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }



export default App;
