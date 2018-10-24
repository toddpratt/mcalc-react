const { Jumbotron, Table, Form, FormGroup, Label, Input } = Reactstrap;

const Banner = props => {
  return (
      <Jumbotron class="page-header panel panel-default">
        <h3 class="panel-header text-center">Mortgage Calculator</h3>

        <p>Want to know how much money you'll
        save and how much faster you'll
        pay off your loan if you make principal
        payments?  This is where you want to
        be.</p>

        <p>None of the data you enter on this
        page will be transmitted anywhere else,
        not even back to this site.</p>

      </Jumbotron>
  );
};

const ResultRow = props => {
    return (
      <tr>
        <th>{props.title}</th>
        <td>{props.value}</td>
      </tr>
    );
};

const ResultsTable = props => {
  return (
      <div class="col-md-6">
        <Table class="table">
          <tbody class="panel-body">
            <ResultRow title="Monthly Payment"
                       value={props.payment} />
            <ResultRow title="Total Loan Cost"
                       value={props.cost} />
            <ResultRow title="Total Interest Payments"
                       value={props.interest} />
            <ResultRow title="Number of Payments"
                       value={props.payment_count} />
          </tbody>
        </Table>
      </div>
  );
};

const Results = props => {
  return (
      <div class="row panel">
        <ResultsTable payment={props.oldPayment}
                      cost={props.oldCost}
                      interest={props.oldInterest}
                      payment_count={props.oldCount} />
        <ResultsTable payment={props.newPayment}
                      cost={props.newCost}
                      interest={props.newInterest}
                      payment_count={props.newCount} />
      </div>
  );
}

const NumericInput = props => {
  return (
      <div class="row body-panel col-md-3">
        <Label>{props.title}</Label>
        <Input value={props.value} />
      </div>
  );
};

class NumericForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    this.updateAmount = this.updateAmount.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateExtra = this.updateExtra.bind(this);
  }

  render() {
    return (
        <div class="row panel">
          <NumericInput title="Loan Amount"
                        onChange={this.updateAmount}
                        value={this.state.amount} />
          <NumericInput title="Loan Term (Years)"
                        onChange={this.updateTerm}
                        value={this.state.term} />
          <NumericInput title="Interest Rate"
                        onChange={this.updateRate}
                        value={this.state.interestRate} />
          <NumericInput title="Extra Principal"
                        onChange={this.updateExtra}
                        value={this.state.extraPayment} />
        </div>
    );
  }

  updateAmount(ev) {
    console.log('old: ', this.state.amount, ' new: ', ev.target.value);
    this.setState({amount: ev.target.value});
  }

  updateTerm(ev) {
    this.setState({term: ev.target.value});
  }

  updateRate(ev) {
    this.setState({rate: ev.target.value});
  }

  updateExtra(ev) {
    this.setState({extra: ev.target.value});
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.stats = {
      oldPayment: 30000,
      oldCost: 300000,
      oldInterest: 32323,
      oldCount: 233,
      newPayment: 30000,
      newCost: 300000,
      newInterest: 32323,
      newCount: 233
    }
    this.state = {
      form: {
        amount: 30000,
        term: 30,
        interestRate: 5,
        extraPayment: 500
      },
      before: {
        payment: 1000,
        cost: 100000,
        interest: 40000,
        count: 160
      },
      after: {
        payment: 1000,
        cost: 100000,
        interest: 40000,
        count: 160
      }
    }
  }

  render() {
    return (
        <div id="container-fluid">
          <Banner />
          <NumericForm
              recalculate={this.recalculate}
              data={this.state.form} />
          <Results />
        </div>
    );
  }

  recalculate() {
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
