import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange(event){
    const text = event.target.value;
    this.setState({
      searchText: text
    });
  }
  onFormSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form className='input-group' onSubmit={this.onFormSubmit}>
          <input
          className='form-control'
          placeholder='Search for a five-day forecast in your city'
          value={this.state.searchText}
          onChange={this.onInputChange}
        />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>Search</button>
          </span>
        </form>
      </div>
    )
  }
}
