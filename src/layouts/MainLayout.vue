<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10">
      <q-toolbar>
        <q-toolbar-title>Quasar Google Maps Demo</q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn
            v-for="(navLink, index) in navLinks"
            :key="index"
            :label="navLink.label"
            :class="{
              'bg-brown-10 text-white': $route.name === navLink.to,
            }"
            :to="{ name: navLink.to }"
            unelevated
          />
          <q-btn
            v-if="$route.name === 'map-add-marker-store'"
            label="Clear markers"
            class="bg-red-10 text-white"
            @click="store.clearMarkers()"
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
import { useMapsStore } from 'src/stores/google-maps-store';

interface navLink {
  label: string;
  to: string;
}

const store = useMapsStore();

const navLinks = <navLink[]>[
  {
    label: 'Google Map',
    to: 'map-home',
  },
  {
    label: 'Add marker',
    to: 'map-add-marker',
  },
  {
    label: 'Add marker (Store)',
    to: 'map-add-marker-store',
  },
];
</script>
