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
import { reactive, ref } from 'vue';
import { ClickEvent } from 'src/models/common.model';
import { Marker } from 'src/models/marker.model';

const markers = ref<Marker[]>([]);

const map = reactive({
  center: { lat: 59.3327202, lng: 18.067573 },
  zoom: 11,
  options: {
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    clickableIcons: false,
  },
});

const addMarker = (e: ClickEvent) => {
  const marker = {
    position: {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    },
  };

  markers.value.push(marker);
};

const handleMapClick = (e: ClickEvent) => addMarker(e);
const handleMarkerClick = (e: ClickEvent) => {
  console.log(e.latLng.lat(), e.latLng.lng());
};
</script>
