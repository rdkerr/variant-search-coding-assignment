import React, { Component } from 'react'
import Autocomplete from './Autocomplete';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: userInput !== "",
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    const { search } = this.props;
    search(e.currentTarget.innerText);
  };

  onButtonClick = e => {
    e.preventDefault();
    const { userInput } = this.state;
    const { search } = this.props;
    search(userInput);
  }

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onButtonClick,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    return (
      <div className="mb-3">
        <form className="mx-3 mt-3">
          <div className="input-group">
            <input type="text"
              className="form-control"
              placeholder="Search"
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}/>
            <div className="input-group-btn">
              <button className="btn btn-outline-dark" onClick={onButtonClick}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        {showSuggestions ? <Autocomplete active={activeSuggestion} suggestions={filteredSuggestions} onClick={onClick}></Autocomplete> : null}
      </div>
    );
  }
}

export default Search;
