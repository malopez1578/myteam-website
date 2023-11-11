// Imports
import { render } from '@testing-library/react';
import { beforeAll, describe } from 'vitest';

// To Test
import App from './App';

describe('Renders main page correctly', async () => {
	beforeAll(async () => {
		// Setup
		render(<App />);
	});
});
