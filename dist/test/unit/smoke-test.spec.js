"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const chai = __importStar(require("chai"));
const chaiString = require("chai-string");
chai.use(chaiString);
const src_1 = require("../../src");
describe('ComponentExample', () => {
    before(done => {
        done();
    });
    after(done => {
        done();
    });
    beforeEach(done => {
        done();
    });
    afterEach(done => {
        done();
    });
    context('component', () => {
        it('component should exist', done => {
            chai_1.expect(src_1.ComponentExample).to.exist;
            done();
        });
    });
});
