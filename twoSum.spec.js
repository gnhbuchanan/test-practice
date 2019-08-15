const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Should be a function', ()=>{
      expect(twoSum).to.be.a('function');
  })
  it('Returns an empty array if no two numbers sum to the target value', () => {
    expect(twoSum([1,2,3]),10).to.equal([]);
  });
  it('Returns an array of the indices of 2 numbers if their sum matches the target value', () => {
    expect(twoSum([1,2,3]),5).to.equal([1,2]);
  });
});

