import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const myMapAPI = import.meta.env.VITE_MAPS_API_KEY;

const Places = () => {
  useEffect(() => {
    const initializeMap = async () => {
      const additionalOptions = {};
      const loader = new Loader({
        apiKey: myMapAPI,
        version: "weekly",
        ...additionalOptions,
      });

      const google = await loader.load();
      const { Map } = await google.maps.importLibrary("maps");

      const map = new Map(document.getElementById("map"), {
        center: { lat: 48.6909, lng: -12.0129 },
        zoom: 2,
      });

      const locations = [
        { name: "Holetown", coordinates: { lat: 13.1833, lng: -59.6366 } },
        { name: "Lisboa", coordinates: { lat: 38.7223, lng: -9.1393 } },
        { name: "Nashville", coordinates: { lat: 36.1627, lng: -86.7816 } },
        { name: "Austin", coordinates: { lat: 30.2672, lng: -97.7431 } },
        { name: "Turf Moor", coordinates: { lat: 53.7896, lng: -2.2391 } },
        { name: "Paris 5th", coordinates: { lat: 48.8462, lng: 2.3448 } },
        { name: "Memphis", coordinates: { lat: 35.1495, lng: -90.049 } },
        { name: "Buxton", coordinates: { lat: 53.259, lng: -1.9144 } },
        { name: "Hebden Bridge", coordinates: { lat: 53.7414, lng: -2.0142 } },
        { name: "Alhambra Palace", coordinates: { lat: 37.176, lng: -3.5875 } },
        { name: "Belfast", coordinates: { lat: 54.5973, lng: -5.9301 } },
        { name: "Soelden", coordinates: { lat: 46.9718, lng: 11.0078 } },
        { name: "Rome", coordinates: { lat: 41.9028, lng: 12.4964 } },
        { name: "Chamonix", coordinates: { lat: 45.9237, lng: 6.8694 } },
        { name: "Firenze", coordinates: { lat: 43.7696, lng: 11.2558 } },
        { name: "Hamburg", coordinates: { lat: 53.5511, lng: 9.9937 } },
      ];

      // Add markers to the map
      const markers = locations.map((location) => {
        const marker = new google.maps.Marker({
          position: location.coordinates,
          map: map,
        });

        // Zoom in on marker click
        marker.addListener("click", () => {
          map.setZoom(12);
          map.setCenter(marker.getPosition());
        });

        return marker;
      });

      // Cleanup
      return () => {
        markers.forEach((marker) => {
          marker.setMap(null);
        });
      };
    };

    initializeMap();
  }, []);

  return (
    <div>
    <div id="map" className="h-32 sm:w-auto md:h-44 lg:h-56 2xl:h-80 "></div>
    </div>
  );
};

export default Places;
