import React, { Component } from 'react';
import './App.css';
import Yells from './Yells/yells';
import Navigation from './Navigation/navigation';
import './Navigation/navigation.css';
import PersonalInfo from './PersonalInfo/personalinfo';



class App extends Component {
  state = {
    yells : [
              { id: '1', content: 'first yell'}, {id: '2', content: 'second yell'}, 
              { id: '3', content: 'third yell'}, {id: '4', content: 'fourth yell'},
              { id: '5', content: 'fifth yell'}, {id: '6', content: 'sixth yell'},
              { id: '7', content: 'seventh yell'}, {id: '8', content: 'eight yell'},
              { id: '9', content: 'ninth yell'}, {id: '10', content: 'tenth yell'}
            ],
    showYells: false
  }

  deleteYellHandler = (yellIndex) => {
    const yells = [...this.state.yells];
    yells.splice(yellIndex, 1);
    this.setState({yells: yells})
  }

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
        <h2>Below is the dummy Data</h2>
        <button 
          onClick={this.toggleYellHandler}>Show Yells</button>
        {yells}
      </div>
    );
  }

}

export default App;
