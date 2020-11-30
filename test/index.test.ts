import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

test('home page', () => {
  const htmlPath = join(__dirname, '..', 'dist', 'index.html');
  expect(existsSync(htmlPath)).toBeTruthy();
  const indexHTML = readFileSync(htmlPath, 'utf-8');
  expect(indexHTML).toMatch('<article');
});
