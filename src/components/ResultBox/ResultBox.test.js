import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCasesPLNtoUSD = [
	{ input: 100, output: { from: '100.00', to: '28.57' } },
	{ input: 20, output: { from: '20.00', to: '5.71' } },
	{ input: 12, output: { from: '12.00', to: '3.43' } },
];

const testCasesUSDdoPLN = [
	{ input: 28.57, output: { from: '28.57', to: '100.00' } },
	{ input: 20, output: { from: '20.00', to: '70.00' } },
	{ input: 10, output: { from: '10.00', to: '35.00' } },
];

describe('Component ResultBox', () => {
	it('should render without crashing', () => {
		render(
			<ResultBox
				from='PLN'
				to='USD'
				amount={100}
			/>
		);
	});
	it('should render proper info about conversion when PLN -> USD', () => {
		for (let testCase of testCasesPLNtoUSD) {
			render(
				<ResultBox
					from='PLN'
					to='USD'
					amount={testCase.input}
				/>
			);
			const result = screen.getByTestId('result');
			expect(result).toHaveTextContent(
				`PLN ${testCase.output.from} = $${testCase.output.to}`
			);
			cleanup();
		}
	});
	it('should render proper info about conversion when USD -> PLN', () => {
		for (let testCase of testCasesUSDdoPLN) {
			render(
				<ResultBox
					from='USD'
					to='PLN'
					amount={testCase.input}
				/>
			);
			const result = screen.getByTestId('result');
			expect(result).toHaveTextContent(
				`$${testCase.output.from} = PLN ${testCase.output.to}`
			);
			cleanup();
		}
	});
	it('should render proper info about conversion when PLN -> PLN', () => {
		render(
			<ResultBox
				from='PLN'
				to='PLN'
				amount={100}
			/>
		);
		const result = screen.getByTestId('result');
		expect(result).toHaveTextContent(`PLN 100.00 = PLN 100.00`);
		cleanup();
	});
	it('should render proper info about conversion when USD -> USD', () => {
		render(
			<ResultBox
				from='USD'
				to='USD'
				amount={100}
			/>
		);
		const result = screen.getByTestId('result');
		expect(result).toHaveTextContent(`$100.00 = $100.00`);
		cleanup();
	});
	it('should render proper info when negative amount provided', () => {
		render(
			<ResultBox
				from='USD'
				to='USD'
				amount={-4100}
			/>
		);
		const result = screen.getByTestId('result');
		expect(result).toHaveTextContent(`Wrong value...`);
		cleanup();
	});
});
