import React, { Component } from 'react'
import AddCountry from './components/AddCountry'
import CountryList from './components/CountryList'
import DoneCountryList from './components/DoneCountryList'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [
        {name: 'South Korea', edit: false, done: false},
        {name: 'Japan', edit: false, done: false},
        {name: 'Canada', edit: false, done: false},
      ],
      country: '',
    }

    this.countryChange = this.countryChange.bind(this)
    this.addCountry = this.addCountry.bind(this)
    this.doneCountry = this.doneCountry.bind(this)
    this.editCountry = this.editCountry.bind(this)
    this.saveCountry = this.saveCountry.bind(this)
    this.deleteCountry = this.deleteCountry.bind(this)
  }

  countryChange(e) {
    this.setState({
      country: e.target.value
    })
  }

  addCountry(country) {
    this.setState({
      countries: this.state.countries.concat({
        name: country,
        edit: false,
        done: false
      })
    })
  }

  doneCountry(country) {
    this.setState({
      countries: this.state.countries.reduce((container, c) => {
        if(c.name === country) {
          c.done = true
        }
        return container.concat(c)
      }, [])
    })
  }

  editCountry(country) {
    this.setState({
      countries: this.state.countries.reduce((container, c) => {
        if(c.name === country) {
          c.edit = true
        }
        return container.concat(c)
      }, [])
    })
  }

  saveCountry(country, newCountry) {
    this.setState({
      countries: this.state.countries.reduce((container, c) => {
        if(c.name === country) {
          c.edit = false
          c.name = newCountry
        }
        return container.concat(c)
      }, [])
    })
  }

  deleteCountry(country) {
    this.setState({
      countries: this.state.countries.filter((c) => {
        return c.name !== country
      })
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1>Travel Bucket List</h1>
        <AddCountry addCountry={this.addCountry} countryChange={this.countryChange} country={this.state.country} />
        <CountryList
          countries={this.state.countries}
          doneCountry={this.doneCountry}
          editCountry={this.editCountry}
          saveCountry={this.saveCountry}
          deleteCountry={this.deleteCountry}
        />
        <DoneCountryList countries={this.state.countries} />
      </div>
    )
  }
}

export default App
