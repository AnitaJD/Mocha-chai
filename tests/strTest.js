const mocha = require('mocha');
const chai = require('chai');

const strReverse = require('../strReverse')

const expect = chai.expect;

describe('Reverse String Test', () => {
    it('Checks if the strings reversed', () => {
        let str1 = strReverse('Mocha is cool!!');
        let str2 = strReverse('Chai is super supportive.');
        
        expect(str1).to.equal('!!looc si ahcoM');
        expect(str2).to.equal('.evitroppus repus si iahC');
    });
});