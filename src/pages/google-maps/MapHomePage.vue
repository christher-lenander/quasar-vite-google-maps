<template>
  <q-page>
    <GMapMap
      :center="map.center"
      :zoom="map.zoom"
      :options="map.options"
      class="gmap"
    >
      <GMapMarker :position="marker.position" />
    </GMapMap>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { googleMapsDefaultOptions } from 'src/config/google-maps-options';

const map = ref(googleMapsDefaultOptions);

const marker = ref({
  position: { lat: 59.3327202, lng: 18.067573 },
});
</script>
<style lang="scss">
.gmap {
  height: calc(100vh - 50px);
}
</style>
