<template>
  <q-page>
    <GMapMap
      :center="map.center"
      :zoom="map.zoom"
      :options="map.options"
      style="height: calc(100vh - 50px)"
      ref="gMap"
    >
      <GMapMarker :position="marker.position" />
    </GMapMap>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const map = reactive({
  center: { lat: 59.3327202, lng: 18.067573 },
  zoom: 11,
  options: {
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    clickableIcons: false,
  },
});

const marker = ref({
  position: { lat: 59.3327202, lng: 18.067573 },
});
</script>
