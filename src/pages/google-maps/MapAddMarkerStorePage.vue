<template>
  <q-page>
    <GMapMap
      :center="map.center"
      :zoom="map.zoom"
      :options="map.options"
      style="height: calc(100vh - 50px)"
      @click="handleMapClick"
      ref="gMap"
    >
      <GMapMarker
        v-for="marker in markers"
        :position="marker.position"
        :key="marker.id"
        @click="store.removeMarker(marker.id)"
      />
    </GMapMap>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ClickEvent } from 'src/models/common.model';
import { Marker } from 'src/models/marker.model';
import { googleMapsDefaultOptions } from 'src/config/google-maps-options';
import { useMapsStore } from 'src/stores/google-maps-store';
import { uid } from 'quasar';

const store = useMapsStore();

const markers = ref<Marker[]>(store.markers);

const addMarker = (e: ClickEvent) => {
  const marker: Marker = {
    id: uid(),
    position: {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    },
  };

  store.addMarker(marker);
};

const map = ref(googleMapsDefaultOptions);

const handleMapClick = (e: ClickEvent) => addMarker(e);
</script>
