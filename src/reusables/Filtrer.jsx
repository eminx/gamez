import React from 'react';
import PropTypes from 'prop-types';

class Filtrer extends React.Component {
  state = {
    isFilterText: false
  }

  handleFilterChange = (e) => {
    const filterValue = e.target.value;
    
    if (String(filterValue).length === 0) {
      this.setState({
        isFilterText: false
      });
    } else {
      this.setState({
        isFilterText: true
      });
    }
    this.props.updateFilter(filterValue);
  }

  render() {
    this.props.isFocused ? this.refs.filterInput.focus() : null;

    return (
      <div className="filter-input">
        <input
          style={{lineHeight: 2, padding: 5, borderColor: '#0d0d0d'}}
          type="text"
          onChange={this.handleFilterChange}
          ref="filterInput"
          value={this.props.filterValue}
          className="filter-objects"
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

Filtrer.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  updateFilter: React.PropTypes.func.isRequired,
  isFocused: React.PropTypes.bool
}

export default Filtrer;

