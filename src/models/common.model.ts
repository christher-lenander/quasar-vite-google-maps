export interface ClickEvent {
  domEvent: Event;
  latLng: google.maps.LatLng;
  pixel: {
    x: number;
    y: number;
  };
}
