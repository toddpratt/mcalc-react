import React from 'react';
import Banner from './banner.jsx'
import NumericForm from './numeric-form.jsx'
import Results from './results.jsx'
import LoanStrategyResult from './calculator.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 250000,
      term: 30,
      rate: 5,
      extra: 500,

      payOld: {},
      payNew: {}
    };

    this.updateAmount = this.updateAmount.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateExtra = this.updateExtra.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => {
      return {
        payOld: this.calculateOld(),
        payNew: this.calculateNew()
      };
    });
  }

  render() {
    return (
        <div className="container-fluid">
          <Banner />
          <div className="form-group mt-2 panel panel-default">
            <NumericForm
                updateAmount={this.updateAmount}
                updateTerm={this.updateTerm}
                updateRate={this.updateRate}
                updateExtra={this.updateExtra}

                amount={this.state.amount}
                term={this.state.term}
                rate={this.state.rate}
                extra={this.state.extra} />

            <Results
                payOld={this.state.payOld}
                payNew={this.state.payNew} />
          </div>
        </div>
    );
  }

  calculateOld(rate, term, amount) {
    return new LoanStrategyResult(rate, term, amount, 0);
  }

  calculateNew(rate, term, amount, extra) {
    return new LoanStrategyResult(rate, term, amount, extra);
  }

  updateAmount(ev) {
    const value = ev.target.value;
    this.setState((state, props) => {
      return {
        payOld: this.calculateOld(this.state.rate,
            this.state.term, value),
        payNew: this.calculateNew(this.state.rate,
            this.state.term, value, this.state.extra),
        amount: value
      };
    });
  }

  updateTerm(ev) {
    const value = ev.target.value;
    this.setState((state, props) => {
      return {
        payOld: this.calculateOld(this.state.rate,
            value, this.state.amount),
        payNew: this.calculateNew(this.state.rate,
            value, this.state.amount, this.state.extra),
        term: value
      };
    });
  }

  updateRate(ev) {
    const value = ev.target.value;
    this.setState((state, props) => {
      return {
        payOld: this.calculateOld(value,
            this.state.term, this.state.amount),
        payNew: this.calculateNew(value,
            this.state.term, this.state.amount, this.state.extra),
        rate: value
      };
    });
  }

  updateExtra(ev) {
    const value = ev.target.value;
    this.setState((state, props) => {
      return {
        payOld: this.calculateOld(this.state.rate,
            this.state.term, this.state.amount),
        payNew: this.calculateNew(this.state.rate,
            this.state.term, this.state.amount, value),
        extra: value
      };
    });
  }
}

export default App;

