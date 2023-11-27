const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach('For each test', () => {
    sinon.spy(console, 'log');
  });
  afterEach('restore each test', () => {
    console.log.restore();
  });
  it('check that console.log is called with correct argument', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('check that console.log is callled with the right argument', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
