const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const assert = require('assert');

describe('sendpaymentrequesttoapi', function() {
  it('check that Utils.calculatenumber was used', function() => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(50, 23.42);

    assert(spy.calledOnce);
    spy.restore();
  });
});
