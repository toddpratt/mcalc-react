class LoanStrategyResult {
  constructor(rate, term, principal, extra) {
    this.rate = rate;
    this.term = term;
    this.principal = principal;
    this.extra = extra;

    const normalPayment = this.calcLoanPayment();
    this.calcLoanStats(normalPayment);
  }

  calcLoanPayment() {
    var j = this.rate / 1200;
    var n = this.term * 12;
    var p = this.principal;
    var s = Math.pow(1 + j, n);
    return p * (j * s) / (s - 1);
  }

  calcLoanStats(normalPayment) {
    const paymentAmount = normalPayment + this.extra;
    const term = this.term * 12;

    let totalInterest = 0;
    let totalCost = 0;
    let paymentCount = 0;
    let principal = this.amount;
    while(principal > 0 && paymentCount <= term) {

      const interestPayment = rate / 1200 * principal;
      const principalPayment = payment - interestPayment;

      totalInterest += interestPayment;
      totalCost += paymentAmount;
      paymentCount++;

      principal -= principalPayment;
    }
    this.payment = paymentAmount;
    this.cost = totalCost;
    this.interest = totalInterest;
    this.count = paymentCount;
  }
}

export default LoanStrategyResult;
