import {  PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig ={
  testMatch:["tests/login.test.ts"],
  use:{
    headless:false,
    screenshot: 'on',
    video: 'on', 
    trace: 'retain-on-failure',
  },
  outputDir: 'test-results/',
  reporter: [['list'], ['html', { open: 'never' }]],
};
export default config;
 