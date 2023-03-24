import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
	it('should return proper value when good input', () => {
		expect(convertPLNToUSD(1)).toBe('$0.29');
		expect(convertPLNToUSD(2)).toBe('$0.57');
		expect(convertPLNToUSD(20)).toBe('$5.71');
		expect(convertPLNToUSD(12)).toBe('$3.43');
	});
	it('should return NaN when input is text', () => {
		expect(convertPLNToUSD('abc')).toBeNaN();
		expect(convertPLNToUSD('-253')).toBeNaN();
		expect(convertPLNToUSD('1')).toBeNaN();
	});
	it('should return NaN when input is empty', () => {
		expect(convertPLNToUSD()).toBeNaN();
	});
	it('should return Error when input is not a number or string', () => {
		expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(() => {})).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
	});
	it('should return 0 when input is negative', () => {
		expect(convertPLNToUSD(-1)).toBe('$0.00');
		expect(convertPLNToUSD(-1000)).toBe('$0.00');
		expect(convertPLNToUSD(-234)).toBe('$0.00');
	});
});
