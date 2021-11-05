export async function calculateLoan(input: any) {
  try {
    let data = {};
    let amount = input.amount;
    let duration = input.duration;
    let percentage = input.percentage;

    console.log(`p: ${percentage}, d: ${duration}, a: ${amount}`);

    let principal = parseFloat(amount);
    let interest = parseFloat(percentage) / 100 / 12;
    let payments = parseFloat(duration);

    // compute monthly payment figure
    let pow = Math.pow(1 + interest, payments);
    let monthly = (principal * pow * interest) / (pow - 1);

    // Check if user input is good
    if (isFinite(monthly)) {
      // display result in 2 decimal places
      let m = monthly.toFixed(2);
      let total = (monthly * payments).toFixed(2);
      let ti = (monthly * payments - principal).toFixed(2);
      data = {
        message: `Your proposed loan repayment plan for ${duration} months`,
        monthlyPayment: m,
        totalRepaymentAmount: total,
        totalInterest: ti,
      };
    }

    console.log(data);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
