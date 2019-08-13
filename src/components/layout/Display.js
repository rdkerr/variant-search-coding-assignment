import React, { Component } from 'react';

const headers = ['GENE', 'NUCLEOTIDE CHANGE', 'PROTEIN CHANGE', 'ALIAS', 'REGION', 'REPORTED CLASSIFICATION', 'LAST EVALUATED', 'LAST UPDATED', 'MORE INFO'];

export class Display extends Component {
  render() {
    return (
      <div className="mx-3">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              {headers.map(header => <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Display;
