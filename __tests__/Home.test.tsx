import { render, screen } from '@testing-library/react';
import Home from '../app/page'; // Adjust the import based on your file structure
import { Suspense } from 'react';
import RootLayout from '@/app/layout';

// Mock fetch globally
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve([{}]), // Mocking the fetch response
	})
) as jest.Mock;

describe('Home', () => {
	it('render home without crashing', async () => {
		const jsxElemnt = await Home();
		render(jsxElemnt);
		const myElem = screen.getByText('Product Home Page');
		expect(myElem).toBeInTheDocument();
	});
	
});
