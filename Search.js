import React, { Component } from 'react';
import './Search.css';



class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return (
      <div class="jumbotron jumbotron-fluid"> 
      <div class="container">
        <input
          class="form-control"
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
        />
        <br/>
        <button class='btn btn-dark' onClick={this.searchArtist} id='search'>Search</button>
      </div>
      </div>
    )
  }
}

export default Search;