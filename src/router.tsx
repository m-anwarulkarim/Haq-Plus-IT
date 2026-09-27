import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { App } from './App';

// Root Route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Index Route for Landing Page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

// Create Route Tree
const routeTree = rootRoute.addChildren([indexRoute]);

// Create Router instance
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register router module augmentation for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
