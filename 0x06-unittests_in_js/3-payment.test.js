const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const assert = require('assert');

describe('sendpaymentrequesttoapi', () => {
  it('check that Utils.calculatenumber was used', () => {
    const sispy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(50, 23.42);
    assert(sispy.calledOnce);
    sispy.restore();
  });
});
