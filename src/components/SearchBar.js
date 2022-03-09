import React from 'react';
import {connect} from 'react-redux';

import {fetchVideo} from '../actions';

class SearchBar extends React.Component {
    
    render() {
        const {term} = this.props;
        return(
            <div className="search-bar ui segement">
                <form onSubmit={} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={term}
                            onChange={}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {  };
  };

  export default connect(
    mapStateToProps,
    {  }
  )(SearchBar);
