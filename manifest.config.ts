import { defineManifest } from '@crxjs/vite-plugin';
import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: 'Login Extension',
  version: pkg.version,
  description: '로그인 기능을 제공하는 Chrome 확장 프로그램',
  action: {
    default_popup: 'src/popup/index.html',
    default_title: 'Login Extension',
  },
  permissions: ['storage'],
  icons: {
    '16': 'public/icon-16.png',
    '48': 'public/icon-48.png',
    '128': 'public/icon-128.png',
  },
});
