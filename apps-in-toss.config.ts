import { defineConfig } from '@apps-in-toss/web-framework/config';
export default defineConfig({
  appName: 'pastanimaltest',
  brand: { displayName: '전생에 나는 뭐였을까?', primaryColor: '#67437F', icon: 'https://raw.githubusercontent.com/Dongsunkim/animaltest/main/public/icon.png' },
  web: { host: 'localhost', port: 5173, commands: { dev: 'vite --host 0.0.0.0', build: 'vite build' } },
  permissions: [],
  outdir: 'dist',
  webViewProps: { type: 'game', bounces: false, pullToRefreshEnabled: false }
});
