"use strict";

describe('MailboxService test', function() {

	var http;
	var httpBackend;
	var mailboxService;

    beforeEach(module('mainApp'));

    beforeEach(inject(function (_MailboxService_, $httpBackend) {
	    mailboxService = _MailboxService_;
	    httpBackend = $httpBackend;
  	}));


	it('test', function() { 

	});
});