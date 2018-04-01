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
  placeholder: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
  isFocused: PropTypes.bool
}

export default Filtrer;

