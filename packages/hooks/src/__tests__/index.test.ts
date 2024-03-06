import * as sunnyHooks from '..';

describe('sunnyHooks', () => {
  test('export modules should be defined', () => {
    Object.keys(sunnyHooks).forEach((module) => {
      expect(sunnyHooks[module]).toBeDefined();
    });
  });
});
