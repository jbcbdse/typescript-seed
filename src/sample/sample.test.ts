import { doubler } from './sample';

describe('doubler', () => {
  it('should return the input number plus itself', () => {
    expect(doubler(2)).toBe(4);
  });
});
