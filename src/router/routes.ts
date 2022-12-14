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
        path: 'map-add-markers',
        name: 'map-add-markers',
        component: () => import('src/pages/google-maps/MapAddMarkersPage.vue'),
      },
      {
        path: 'map-geocode',
        name: 'map-geocode',
        component: () => import('src/pages/google-maps/MapGeocodePage.vue'),
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
