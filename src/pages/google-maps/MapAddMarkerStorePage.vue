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
        v-for="(marker, index) in markers"
        :position="marker.position"
        :key="index"
        @click="handleMarkerClick"
      />
    </GMapMap>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ClickEvent } from 'src/models/common.model';
import { Marker } from 'src/models/marker.model';
import { googleMapsDefaultOptions } from 'src/config/google-maps-options';
import { useGoogleMapsStore } from 'src/stores/google-maps-store';

const store = useGoogleMapsStore();

const markers = ref<Marker[]>(store.markers);

const addMarker = (e: ClickEvent) => {
  const marker = {
    position: {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    },
  };

  store.addMarkerToMap(marker);
};

const map = ref(googleMapsDefaultOptions);

const handleMapClick = (e: ClickEvent) => addMarker(e);
const handleMarkerClick = (e: ClickEvent) => {
  console.log(e.latLng.lat(), e.latLng.lng());
};
</script>
