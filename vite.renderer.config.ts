import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'; // if using React

export default defineConfig({
  root: 'src/renderer', // <-- important
  build: {
    outDir: '../../out/renderer', // <-- relative to project root
    emptyOutDir: true,
  },
//   plugins: [react()],
});
