import React from 'react';
import styles from './App.module.css'; // need to import css modules stylesheet as styles instead of just a sheet
import Navigation from './Navigation/navigation';
import MainPage from './MainPage/mainpage';



const App = () => (
      <div className="App">
        <Navigation />
        <MainPage />
      </div>
)

export default App;
