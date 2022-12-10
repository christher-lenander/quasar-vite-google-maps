<template>
  <q-page>
    <GMapMap
      :center="googleMaps.center"
      :zoom="googleMaps.zoom"
      :options="googleMaps.options"
      style="height: calc(100vh - 50px)"
      @click="handleMapClick"
      ref="gMap"
    >
      <q-toolbar
        class="text-grey-10 fixed shadow-4 bg-white"
        style="
          width: 50vw;
          top: 70px;
          border-radius: 3px;
          transform: translateX(-50%);
          left: 50%;
        "
      >
        <q-toggle
          v-model="disableAddMarker"
          color="grey-9"
          label="Disable Add Marker"
        />
        <q-space />

        <q-btn
          :disabled="!markers.length"
          label="Clear Map"
          class="bg-red-10 text-white"
          @click="clearMarkers()"
        />
      </q-toolbar>
      <GMapMarker
        v-for="marker in markers"
        :position="marker.position"
        :key="marker.id"
        @click="removeMarker(marker.id)"
      />
    </GMapMap>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMapsStore } from 'src/stores/google-maps-store';
import { ClickEvent } from 'src/models/common.model';
import { storeToRefs } from 'pinia';
import { googleMapsDefaultOptions } from 'src/config/google-maps-options';

const { markers } = storeToRefs(useMapsStore());
const { addMarker, removeMarker, clearMarkers } = useMapsStore();

const disableAddMarker = ref(false);

const googleMaps = ref(googleMapsDefaultOptions);

const handleMapClick = (e: ClickEvent) => {
  if (disableAddMarker.value) {
    return;
  }

  addMarker(e.latLng.lat(), e.latLng.lng());
};
</script>
