import { createRootRoute, createRouter } from '@tanstack/react-router';
import { App } from './App';

// Root Route rendering App
const rootRoute = createRootRoute({
  component: App,
});

// Create Router instance
export const router = createRouter({
  routeTree: rootRoute,
  defaultPreload: 'intent',
});

// Register router module augmentation for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
