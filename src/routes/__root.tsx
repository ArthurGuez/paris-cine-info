import { HeadContent, Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <RootComponent />
    </>
  ),
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Le programme cinéma complet et sur mesure',
      },
      {
        title: 'Paris Ciné Info - Le programme cinéma complet et sur mesure',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
