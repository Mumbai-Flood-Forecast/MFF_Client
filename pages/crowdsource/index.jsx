import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((module) => module.Marker), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then((module) => module.CircleMarker), { ssr: false });

function CrowdSrouce() {

    const mapStyle = {
        height: '100vh',
        width: '100%',
        margin: '0 auto',
    };

    return (
        <div className='container'>
            <div className="header">
                <h2 className='heading'>Kenya Population as Per 2019 National Census Exercise</h2>
                <p className="text-muted">A choropleth map displaying Kenya population density as per the national census conducted <br />in 2019
                    Each County, details displayed by the map include, total population and number of each gender.</p>
            </div>
            <div className="">
                <div className="">
                    <MapContainer center={[1.286389, 38.817223]} zoom={6} scrollWheelZoom={true} style={mapStyle}>
                        <TileLayer
                            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default CrowdSrouce;