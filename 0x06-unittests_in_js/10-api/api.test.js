const request = require('request');
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  }
  it("check correct status code", function(done) {
    request(options, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check correct content", function(done) {
    request(options, function(err, res, body) {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });
  it("check correct content length", function(done) {
    request(options, function(err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart page', () => {
  it('check status code for correct url', function(done) {
    request.get('http://localhost:7865/cart/4', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });
  it('check status code for wrong url', function(done) {
    request.get('http://localhost:7865/cart/boy', function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('check content of output', function(done) {
    request.get('http://localhost:7865/cart/4', function(err, res, body) {
      expect(body).to.contain('Payment methods for cart 4');
      done();
    });
  });
});

describe('Available_payment', () => {
  it('check status code for correct url', function() {
    request.get('http://localhost:7865/available_payments', function(err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
    });
  });
  it('check content of output', function() {
    const output = {
	    payment_methods: {
		    credit_cards: true,
		    paypal: false
	    }
    }
    const param = {json: true};
    request.get('http://localhost:7865/available_payments', param, function(err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
    });
  });
});

describe('Login', () => {
  it('check status code for correct url', function(done) {
    const param = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
		    userName: 'OMOBA'
	    }
    };
    request.post(param, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('check correct content for correct url', function(done) {
    const param = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
		    userName: 'OMOBA'
	    }
    };
    request.post(param, function(err, res, body) {
      if (err) {
        expect(res.statuCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome OMOBA');
      }
      done();
    });
  });
  it('checks stutus code for wrong url', function(done) {
    const param = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
		    user: 'OMOBA'
	    }
    };
    request.post(param, function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
