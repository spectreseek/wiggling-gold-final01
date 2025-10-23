import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MapLocationProps {
  latitude?: number;
  longitude?: number;
}

const MapLocation = ({ latitude = 5.6037, longitude = -0.1870 }: MapLocationProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSaved, setTokenSaved] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenSaved || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 14,
    });

    // Add marker at the location
    new mapboxgl.Marker({ color: '#8B5CF6' })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3 class="font-bold">Wiggling Gold</h3><p>Visit us here</p>')
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    return () => {
      map.current?.remove();
    };
  }, [tokenSaved, mapboxToken, latitude, longitude]);

  if (!tokenSaved) {
    return (
      <Card className="p-6 bg-accent border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">
          Configure Map
        </h3>
        <p className="text-muted-foreground mb-4">
          To display the map, please enter your Mapbox public token. You can get one for free at{' '}
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={() => setTokenSaved(true)}
            disabled={!mapboxToken}
            className="bg-gradient-earth"
          >
            Load Map
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-medium">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapLocation;
