import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <form className="m-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" />
          <div class="input-group-btn">
            <button class="btn btn-outline-dark" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
