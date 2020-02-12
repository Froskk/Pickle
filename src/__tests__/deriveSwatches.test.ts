import { halfSine, deriveSwatches } from '../utils/swatchColors';

describe('Sine function without vertical shift', () => {
  const sine = halfSine(1, 0, 2, 0);
  it('gives x: 0, y: 0', () => {
    expect(sine(0)).toBe(0);
  });
  it('gives x: 0.5, y: 1', () => {
    expect(sine(0.5)).toBe(1);
  });
  it('gives x: 1, y: 0', () => {
    expect(Math.abs(sine(1))).toBeLessThan(0.001);
  });
});

describe('Sine function with 0.5 amplitude', () => {
  const sine = halfSine(0.5, 0, 2, 0);
  it('gives x: 0, y: 0, params 0.5, 0, 2, 0', () => {
    expect(sine(0)).toBe(0);
  });
  it('gives x: 0.5, y: 0.5, params 0.5, 0, 2, 0', () => {
    expect(sine(0.5)).toBe(0.5);
  });
  it('gives x: 1, y: 0, params 0.5, 0, 2, 0', () => {
    expect(Math.abs(sine(1))).toBeLessThan(0.001);
  });
});

describe('Sine function with 0.5 vertical shift', () => {
  const sine = halfSine(1, 0.5, 2, 0);
  it('gives x: 0, y: 0.5 ', () => {
    expect(sine(0)).toBe(0.5);
  });
  it('gives x: 0.5, y: 1.5', () => {
    expect(sine(0.5)).toBe(1.5);
  });
  it('gives x: 1, y: 0.5 ', () => {
    expect(Math.abs(sine(1) - 0.5)).toBeLessThan(0.001);
  });
});

describe('Sine function with 0.5 amplitude and 0.5 vertical shift', () => {
  const sine = halfSine(0.5, 0.5, 2, 0);
  it('gives x: 0, y: 0.5', () => {
    expect(sine(0)).toBe(0.5);
  });
  it('gives x: 0.5, y: 1', () => {
    expect(sine(0.5)).toBe(1);
  });
  it('gives x: 1, y: 0.5', () => {
    expect(Math.abs(sine(1) - 0.5)).toBeLessThan(0.001);
  });
});

describe('Swatch generator', () => {
  const testColor = 'hsl(191, 83, 50)';
  const testArray = [191, 83, 50];
  it('makes no changes without saturation alteration', () => {
    const swatches = deriveSwatches(testColor, 0, 0);
    expect(swatches[0][1]).toEqual(testArray[1]); // End point
    expect(swatches[2][1]).toEqual(testArray[1]); // Mid point
    expect(swatches[4]).toEqual(testArray); // Center point
  });
  it('works with positive saturation alteration', () => {
    const swatches = deriveSwatches(testColor, 10, 0);
    expect(swatches[0][1]).toBeLessThan(testArray[1]);
    expect(swatches[4][1]).toEqual(testArray[1]);
  });
  it('works with negative saturation alteration', () => {
    const swatches = deriveSwatches(testColor, -10, 0);
    expect(swatches[0][1]).toBeGreaterThan(testArray[1]);
    expect(swatches[4][1]).toEqual(testArray[1]);
  });
});
