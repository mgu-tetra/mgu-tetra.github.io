import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        news: resolve(__dirname, 'src/news/news.html'),
        article: resolve(__dirname, 'src/news/article.html'),
        programming: resolve(__dirname, 'src/programming/programming.html'),
        graphics: resolve(__dirname, 'src/graphics/graphics.html'),
        admin: resolve(__dirname, 'src/admin/editor.html'),
        greeting: resolve(__dirname, 'src/greeting_newyear_2026.html')
      }
    }
  },
  plugins: [
    ViteEjsPlugin(
      {},
      {
        ejs: {
          views: [resolve(__dirname, 'src')]
        }
      }
    )
  ]
});
