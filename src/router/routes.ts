import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'map-home',
        component: () => import('src/pages/google-maps/MapHomePage.vue'),
      },
      {
        path: '/map-add-marker',
        name: 'map-add-marker',
        component: () => import('src/pages/google-maps/MapAddMarkerPage.vue'),
      },
      {
        path: '/map-add-marker-store',
        name: 'map-add-marker-store',
        component: () =>
          import('src/pages/google-maps/MapAddMarkerStorePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
