import { render, screen } from '@testing-library/react';
import ProductCreatePage from '@/app/product/create/page';

describe('Product', () => {
	it('renders product create page', () => {
		render(<ProductCreatePage />);
		const myElem = screen.getByText('Create New Product');
		expect(myElem).toBeInTheDocument();
	});
});
