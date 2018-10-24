import React from 'react';

const ResultRow = props => {
    return (
      <tr>
        <th>{props.title}</th>
        <td className="text-right">{props.value}</td>
      </tr>
    );
};

const ResultsTable = props => {
  return (
      <div className="col-md-6">
      <h3 className="text-center">{props.title}</h3>
        <table className="table">
          <tbody className="panel-body">
            <ResultRow title="Monthly Payment"
                       value={props.stats.payment} />
            <ResultRow title="Total Loan Cost"
                       value={props.stats.cost} />
            <ResultRow title="Total Interest Payments"
                       value={props.stats.interest} />
            <ResultRow title="Number of Payments"
                       value={props.stats.count} />
          </tbody>
        </table>
      </div>
  );
};

const Results = props => {
  return (
      <div className="row panel-body">
        <ResultsTable
            title="With Normal Payments"
            stats={props.payOld} />

        <ResultsTable
            title="With Extra Payments"
            stats={props.payNew} />
      </div>
  );
}

export default Results;
