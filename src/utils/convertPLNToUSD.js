export const convertPLNToUSD = (PLN) => {
	const PLNtoUSD = PLN / 3.5;

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	if ((!PLN || typeof PLN === 'string') && typeof PLN !== 'object') {
		return NaN;
	} else if (PLN < 0) {
		return formatter.format(0).replace(/\u00a0/g, ' ');
	} else if (typeof PLN === 'object' || typeof PLN === 'function') {
		return 'Error';
	}

	return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
};
