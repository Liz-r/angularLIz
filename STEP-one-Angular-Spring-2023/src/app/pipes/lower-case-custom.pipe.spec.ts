import { LowerCaseCustomPipe } from './lower-case-custom.pipe';

describe('LowerCaseCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new LowerCaseCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
