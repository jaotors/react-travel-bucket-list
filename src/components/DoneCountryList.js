import React, { Component } from 'react'

class DoneCountryList extends Component {
  render() {
    return (
      <div className="country-list">
        <h3>List of countries that I traveled</h3>
        <ul>
          {
            this.props.countries.filter((country) => {
              return country.done === true
            }).map((country) => {
              return (
                <li key={country.name}>{country.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default DoneCountryList