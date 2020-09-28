import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFlield: ''
    };
  }

componentDidMount(){
  fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({monsters: users}))
  }
handleChange = (e) => {
  this.setState({searchFlield: e.target.value});
  };
render(){
  const {monsters,searchFlield} = this.state;
  const fillteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchFlield.toLowerCase())
  );

    return  (
      <div className='App'>
        <h1>Search your cats</h1>
      <SearchBox
        placeholder='Search Monsters'
        handleChange = {this.handleChange}
        />
      <CardList monsters = {fillteredMonsters}/>
      </div>
    );
  }
}

export default App;
