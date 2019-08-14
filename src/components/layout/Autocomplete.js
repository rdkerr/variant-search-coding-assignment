import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import css from './Autocomplete.css';

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    onClick: PropTypes.func,
    active: PropTypes.number
  };

  static defaultProps = {
    suggestions: [],
    onClick: () => {},
    active: 0
  };

  render() {
    const {
      suggestions,
      onClick,
      active
    } = this.props;
    return (
      <div>
        <ul className="mx-3 suggestions">
          {suggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === active) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
