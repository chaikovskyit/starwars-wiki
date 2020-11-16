import React, {Component} from 'react'

import SwapiService from '../../services/swapiService'
import './Card.css'

class Card extends Component {

  swapiService = new SwapiService()

  state = {
    name: null,
    birthYear: null
  }

  constructor() {
    super()
    this.updateCard()
  }

  updateCard() {
    this.swapiService.getPerson(3)
      .then((person) => {
        this.setState({
          name: person.name,
          birthYear: person.birth_year
        })
      })
  }

  render() {

    const {name, birthYear} = this.state

    return(
      <div className="Card">
        <img src="https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png" alt=""/>
        <span>Name: {name}</span>
        <hr/>
        <span>Birth year: {birthYear}</span>
    </div> 
    )
  }
}

export default Card