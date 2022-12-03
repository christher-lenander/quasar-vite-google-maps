<template>
  <q-page class="">
    <div class="fit">
      <GMapMap
        :center="map.center"
        :zoom="map.zoom"
        style="height: calc(100vh - 50px)"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const map = reactive({
  center: { lat: 59.7593389, lng: 18.7015669 },
  zoom: 14,
});
</script>
