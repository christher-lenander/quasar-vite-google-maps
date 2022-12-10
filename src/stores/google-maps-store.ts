import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { uid } from 'quasar';
import { Marker } from 'src/models/marker.model';

export const useMapsStore = defineStore('maps-store', () => {
  // State
  const markers = ref<Marker[]>([]);

  // Action
  const addMarker = (position: google.maps.LatLngLiteral) => {
    const marker: Marker = {
      id: uid(),
      position,
    };
    markers.value.push(marker);
  };

  // Action
  const removeMarker = (id: string) => {
    const index = markers.value.findIndex((marker) => marker.id === id);
    if (index !== -1) {
      markers.value.splice(index, 1);
    }
  };

  // Action
  const clearMarkers = () => {
    markers.value.splice(0, markers.value.length);
  };

  // Getter
  const markerCounter = computed(() => markers.value.length);

  return {
    markers,
    addMarker,
    removeMarker,
    clearMarkers,
    markerCounter,
  };
});
