import { defineRoute } from '@remix-run/react';

export const routes = defineRoute(() => [
  { path: '/', module: '_index' },
  { path: '/contactMe', module: 'contactMe' },
  // Add more routes as needed
]);
