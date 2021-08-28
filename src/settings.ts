// Settings for the map goes inside this file
import mapStyles from './mapStyles';

export const containerStyle = {
  width: '100%',
  height: '100vh',
};

// Center on Lisbon
export const center = {
  lat: 38.722252,
  lng: -9.139337,
};

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
