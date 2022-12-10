<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" elevated>
      <q-toolbar>
        <q-toolbar-title>Quasar Google Maps Demo</q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn
            v-for="(navLink, index) in navLinks"
            :key="index"
            :label="navLink.label"
            :class="{
              'bg-grey-9 text-white': $route.name === navLink.to,
            }"
            :to="{ name: navLink.to }"
            unelevated
          />
        </div>
        <q-space />
        <div>Quasar (with vite) v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
interface navLink {
  label: string;
  to: string;
}

const navLinks = <navLink[]>[
  {
    label: 'Google Map',
    to: 'map-home',
  },
  {
    label: 'Add markers',
    to: 'map-add-markers',
  },
  {
    label: 'Geocode',
    to: 'map-geocode',
  },
];
</script>
