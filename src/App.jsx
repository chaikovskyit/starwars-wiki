import React, {Component} from 'react'

import Title from '../src/Components/Title/Title'
import Search from '../src/Components/Search/Search'
import Card from '../src/Components/Card/Card'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Title />
        <Search />
        <div className="WrrapCards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}

export default App