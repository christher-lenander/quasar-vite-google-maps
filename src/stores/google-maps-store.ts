import { defineStore } from 'pinia';
import { Marker } from 'src/models/marker.model';

export const useGoogleMapsStore = defineStore('google-maps', {
  state: () => ({
    markers: <Marker[]>[],
  }),
  getters: {},
  actions: {
    addMarkerToMap(marker: Marker) {
      this.markers.push(marker);
    },
  },
});
