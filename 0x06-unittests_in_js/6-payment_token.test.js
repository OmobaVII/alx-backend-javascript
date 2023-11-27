const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
  it('checks if async with done callback', function(done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      done();
    });
  });
});
