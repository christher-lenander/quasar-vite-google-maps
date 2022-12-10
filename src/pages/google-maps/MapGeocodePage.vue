<template>
  <q-page>
    <GMapMap
      :center="googleMaps.center"
      :zoom="googleMaps.zoom"
      :options="googleMaps.options"
      style="height: calc(100vh - 50px)"
      ref="gMap"
    >
      <q-toolbar
        class="text-grey-10 fixed shadow-4 bg-white my-toolbar q-px-none"
      >
        <q-input
          v-model="address"
          type="text"
          label="Address (Hint: 'Sveavägen 46, Stockholm')"
          square
          filled
          class="full-width"
          @keypress.enter="geocode({ address })"
        />
      </q-toolbar>
      <GMapMarker v-if="marker" :position="marker.position" :key="marker.id" />
    </GMapMap>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Marker } from 'src/models/marker.model';
import { uid } from 'quasar';

const options = {
  zoom: 12,
  center: { lat: 59.3327202, lng: 18.067573 },
  options: {
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    clickableIcons: false,
  },
};

const googleMaps = ref(options);
const marker = ref<Marker | null>(null);
const address = ref('');
let geocoder: google.maps.Geocoder;

const geocode = (request: google.maps.GeocoderRequest): void => {
  marker.value = null;
  geocoder = new google.maps.Geocoder();
  geocoder.geocode(request, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK && results) {
      const position = results[0].geometry.location.toJSON();
      marker.value = {
        id: uid(),
        position,
      };
      googleMaps.value.center = position;
      googleMaps.value.zoom = 15;
    }
  });
};
</script>

<style lang="scss" scoped>
.my-toolbar {
  width: 50vw;
  top: 70px;
  border-radius: 3px;
  transform: translateX(-50%);
  left: 50%;
}
</style>
