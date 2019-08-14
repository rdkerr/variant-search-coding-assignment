import React, { Component } from 'react';
import PropTypes from "prop-types";

const headers = ['GENE', 'NUCLEOTIDE CHANGE', 'PROTEIN CHANGE', 'ALIAS', 'REGION', 'REPORTED CLASSIFICATION', 'LAST EVALUATED', 'LAST UPDATED', 'MORE INFO'];
const keys = ['gene','nucleotide_change','protein_change','alias','region','reported_classification', 'last_evaluated','last_updated','url',];

export class Display extends Component {
  static propTypes = {
    results: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    results: [],
  };
  render() {
    const {results} = this.props;
    console.log(results)
    return (
      <div className="mx-3">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              {headers.map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {!results.length
              ? null
              : results.map(result => <tr>{keys.map(key => <td>{result[key]}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Display;
