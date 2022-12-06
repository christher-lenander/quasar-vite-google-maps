import { defineStore } from 'pinia';
import { Marker } from 'src/models/marker.model';
import { ref } from 'vue';

export const useMapsStore = defineStore('maps-store', () => {
  const markers = ref<Marker[]>([]);

  const addMarker = (marker: Marker) => {
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
