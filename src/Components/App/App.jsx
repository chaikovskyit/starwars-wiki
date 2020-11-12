import React from 'react'

import Title from '../Title/Title'
import Search from '../Search/Search'
import Card from '../Card/Card'
import './App.css'

const App = () => {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App