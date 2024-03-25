import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

test('App Router: Works with Server Components', () => {
	render(<Home />);
	expect(
		screen.getByRole('heading', { level: 1, name: 'Main page!' })
	).toBeDefined();
});
