import React, { useCallback, useRef, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import './Map.css';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 60px)',
};

const center = {
  lat: 37.5665,
  lng: 126.9780,
};

function Map() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [allMarkers, setAllMarkers] = useState([]); // Store all fetched markers
  const [selectedCategory, setSelectedCategory] = useState('');
  const autocompleteRef = useRef(null);
  const [mapError, setMapError] = useState(null);

  const onMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  // Fetch marker data from JSON file
  useEffect(() => {
    const fetchMarkerData = async () => {
      try {
        const response = await fetch('/data/markerData.json');
        const data = await response.json();
        setAllMarkers(data.flatMap((category) => category.places)); // Store all markers
        setMarkers(data.flatMap((category) => category.places)); // Show all markers initially
      } catch (error) {
        console.error('Error fetching marker data:', error);
      }
    };

    fetchMarkerData();
  }, []);

  // Reset the map state when the component mounts
  useEffect(() => {
    setSelectedCategory('');
    if (map) {
      map.setCenter(center); // Reset the map center
    }
  }, [map]);

  const handleSearch = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        setMap((prevMap) => {
          prevMap.setCenter({ lat: lat(), lng: lng() });
          return prevMap;
        });
      }
    }
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
      setMarkers(allMarkers); // Reset to show all markers
    } else {
      setSelectedCategory(category);
      const filteredMarkers = allMarkers.filter(marker => 
        marker.category === category // Assuming markers have a category property
      );
      setMarkers(filteredMarkers);
    }
  };

  const handleMarkerClick = (placeId) => {
    const service = new window.google.maps.places.PlacesService(map);

    service.getDetails({ placeId }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>${place.name}</strong><br>${place.formatted_address}<br>${place.formatted_phone_number || 'N/A'}</div>`,
        });
        infoWindow.open(map);
      }
    });
  };

  return (
    <LoadScript 
      googleMapsApiKey="AIzaSyCvdJ5zqwvVUClcvCOf37w_HVXJWFDqj6Q" 
      libraries={libraries} 
      onError={() => setMapError('Failed to load Google Maps')}
    >
      <div style={{ position: 'relative' }}>
        {mapError && <div>Error loading map: {mapError}</div>}
        
        {/* Search Bar */}
        <div className="searchBar">
          <Autocomplete onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} onPlaceChanged={handleSearch}>
            <input type="text" placeholder="Search places..." className="searchInput" />
          </Autocomplete>
        </div>

        {/* Category Buttons */}
        <div className="categoryButtons">
          <div className="categoryScroll">
            {['Attractions', 'Restaurants', 'Cafes', 'Shopping', 'Nightlife'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`categoryButton ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          onLoad={onMapLoad}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => handleMarkerClick(marker.placeId)}
            />
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default Map;
