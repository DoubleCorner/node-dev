const forecast = require('nostradamus');

const data = [
    362, 385, 432, 341, 382, 409, 498, 387, 473, 513, 582, 474, 544, 582, 681,
    557, 628, 707, 773, 592, 627, 725, 854, 661,
  ],
  alpha = 0.5, // overall smoothing component
  beta = 0.4, // trend smoothing component
  gamma = 0.6, // seasonal smoothing component
  period = Math.floor(data.length / 2), // # of observations per season
  m = Math.min(10, period); // # of future observations to forecast

const predictions = forecast(data, alpha, beta, gamma, period, m);
console.log(predictions);

const ARIMA = require('arima');
const options: any = {
  ARIMA: {
    // p: 2,
    // d: 1,
    // q: 2,
    verbose: false,
  },
  SARIMA: {
    // p: 2,
    // d: 1,
    // q: 2,
    P: 1,
    D: 0,
    Q: 1,
    s: 12,
    verbose: false,
  },
  SARIMAX: {
    // p: 1,
    // d: 0,
    // q: 1,
    transpose: true,
    verbose: false,
  },
  AutoARIMA: {
    auto: true,
    verbose: false,
  },
};
// for (const key in options) {
//   const element = options[key];
//   const autoARIMA = new ARIMA(element).fit(data);
//   const [pred] = autoARIMA.predict(12);
//   console.log(key, pred);
// }
