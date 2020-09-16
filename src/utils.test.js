import { capitalize } from './utils';

describe('Tests for capitalize utils function', () => {
  test('should capitalize a lowercased string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should capitalize an uppercased string', () => {
    expect(capitalize('HELLO')).toBe('Hello');
  });

  test('should capitalize an string with an uppercased letter', () => {
    expect(capitalize('heLlo')).toBe('Hello');
  });
});
