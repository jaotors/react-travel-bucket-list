import React, { Component } from 'react'

class CountryList extends Component {
  constructor() {
    super()

    this.editClick = this.editClick.bind(this)
    this.saveClick = this.saveClick.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
    this.doneClick = this.doneClick.bind(this)
  }

  editClick(e) {
    this.props.editCountry(e.target.value)
  }

  saveClick(e) {
    const {value, parentNode} = e.target
    const newCountry = parentNode.previousSibling.firstChild.value === '' ? value : parentNode.previousSibling.firstChild.value
    this.props.saveCountry(value, newCountry)
  }

  doneClick(e) {
    const {value} = e.target
    this.props.doneCountry(value)
  }

  deleteClick(e) {
    const {value} = e.target
    this.props.deleteCountry(value)
  }


  render() {
    return (
      <div className="country-list">
        <h3>List of countries I that want to travel</h3>
        <ul>
          {
            this.props.countries.filter((country) => {
              return country.done === false
            }).map((country, index) => {
              return (
                <li key={country.name + index}>
                  <span>{country.edit ? <input type="text" placeholder={country.name} /> : country.name}</span>
                  <span>
                    <button value={country.name} onClick={country.edit ? this.saveClick : this.editClick} className="edit-item">{country.edit ? 'Save' : 'Edit'}</button>
                    <button value={country.name} onClick={this.deleteClick} className="delete-item">Delete</button>
                    <button value={country.name} onClick={this.doneClick} className="done-item">Done</button>
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default CountryList