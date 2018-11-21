import React, { Component } from 'react';
import './App.css';
import Yells from './Yells/yells';
import Navigation from './Navigation/navigation';
import './Navigation/navigation.css';
import PersonalInfo from './PersonalInfo/personalinfo';



class App extends Component {
  state = {
    yells : [
              { content: 'first yell'}, { content: 'second yell'}, 
              { content: 'third yell'}, { content: 'fourth yell'},
              { content: 'fifth yell'}, { content: 'sixth yell'},
              { content: 'seventh yell'}, { content: 'eight yell'},
              { content: 'ninth yell'}, { content: 'tenth yell'}
            ],
    showYells: true
  }
  render() {

    let yells = null;

    if (this.state.showYells){
      yells = (
        <div>
          {this.state.yells.map(yell => {
            return <Yells
            content={yell.content}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <Navigation />
        <PersonalInfo className='personalInfo' />
        <h2>Below is the dummy Data</h2>
        {yells}
      </div>
    );
  }

  
//  myyells = [{ content: 'first yell'}, { content: 'second yell'}, 
//  { content: 'third yell'}, { content: 'fourth yell'},
//  { content: 'fifth yell'}, { content: 'sixth yell'},
//  { content: 'seventh yell'}, { content: 'eight yell'},
//  { content: 'ninth yell'}, { content: 'tenth yell'}]

//   yellmapping({myyells}){
//     return myyells.map(yell => (
//         <h1>{yell.content}</h1>
//     ))
// }


  // YellsList({myYells}){
  //   return yells.map(yell =>(
  //     <p>{yells.content}</p>
  //   ));
  // }
}

export default App;
