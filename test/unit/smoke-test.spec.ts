"use strict";

import {assert, expect, should} from 'chai';
import * as chai from 'chai';
import chaiString = require('chai-string');
chai.use(chaiString);
import {ComponentExample} from '../../src';

describe('ComponentExample', () => {
    
	before(done => {
		// Call before all tests;
		done();
	});

	after(done => {
		// Call after all tests
		done();
	});

	beforeEach(done => {
		// Call before each test
		done();
	});

	afterEach(done => {
		// Call after each test
		done();
	});

	context('component', () => {
		it('component should exist', done => {
			expect(ComponentExample).to.exist;
			done();
		});
	});

});