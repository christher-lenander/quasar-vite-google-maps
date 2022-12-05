export interface ClickEvent {
  domEvent: Event;
  latLng: {
    lat: () => number;
    lng: () => number;
  };
  pixel: {
    x: number;
    y: number;
  };
}
