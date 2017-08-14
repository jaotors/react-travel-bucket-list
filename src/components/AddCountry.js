import React, { Component } from 'react'

class AddCountry extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addCountry(this.props.country)
  }

  render() {
    return (
      <div className="input-add">
        <div>
          <input type="text" placeholder="Country" onChange={this.props.countryChange} />
          <button className="add-item" onClick={this.handleClick} >Add Country</button>
        </div>
        <p>I want to travel in "<strong>{this.props.country === '' ? 'country' : this.props.country}</strong>"</p>
      </div>
    )
  }
}

export default AddCountry