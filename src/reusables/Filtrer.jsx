import React from 'react';

class Filtrer extends React.Component {
  state = {
    isFilterText: false
  }

  searchCrossIcon = () => {
    const value = this.state.isFilterText;
    if (value)  {
      return (
        <i 
          className="material-icons" 
          style={{cursor:'pointer'}} 
          onClick={this.props.deleteFilterText}
        >
          close
        </i>
      );
    } else {
      return (
        <i className="material-icons">search</i>
      );
    }
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
          type="text"
          onChange={this.handleFilterChange}
          ref="filterInput"
          value={this.props.filterValue}
          className="filter-objects"
          placeholder={this.props.placeholder}
        />
        <span className="filter-icon">{this.searchCrossIcon()}</span>
      </div>
    )
  }
}

export default Filtrer;

  // propTypes: {
  //   placeholder: React.PropTypes.string.isRequired,
  //   updateFilter: React.PropTypes.func.isRequired,
  //   isFocused: React.PropTypes.bool
  // }