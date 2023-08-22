import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/myteam-website/',
	plugins: [react()],
	test: {
		environment: 'jsdom',
	},
});
