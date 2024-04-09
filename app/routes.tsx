import { defineRoute } from '@remix-run/react';

export const routes = defineRoute(() => [
  { path: '/', module: '_index' },
  { path: '/contactMe', module: 'contactMe' },
  { path: '/thank-you', module: 'thank-you' },
  // Add more routes as needed
]);
