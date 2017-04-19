import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';

const API_KEY = '1a6b71bc3f93a7805056b36113f5683e';

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar/>
      </div>
    );
  }
};
