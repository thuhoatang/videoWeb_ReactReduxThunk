import React from 'react';
import { connect } from 'react-redux';

import { fetchVideo } from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { fetchVideo } = this.props;
    const { term } = this.state;
    console.log('term', term);
    fetchVideo(term);
  };

  onValueChange = (event) => {
    const value = event.target.value;
    this.setState({ term: value });
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segement">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={term} onChange={this.onValueChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  fetchVideo,
})(SearchBar);
