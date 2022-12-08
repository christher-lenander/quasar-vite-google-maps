import { defineStore } from 'pinia';
import { ref } from 'vue';
import { uid } from 'quasar';
import { Marker } from 'src/models/marker.model';

export const useMapsStore = defineStore('maps-store', () => {
  const markers = ref<Marker[]>([]);

  const addMarker = (lat: number, lng: number) => {
    const marker: Marker = {
      id: uid(),
      position: { lat, lng },
    };
    markers.value.push(marker);
  };

  const removeMarker = (id: string) => {
    const index = markers.value.findIndex((marker) => marker.id === id);
    if (index !== -1) {
      markers.value.splice(index, 1);
    }
  };

  const clearMarkers = () => {
    markers.value.splice(0, markers.value.length);
  };

  return {
    markers,
    addMarker,
    removeMarker,
    clearMarkers,
  };
});
