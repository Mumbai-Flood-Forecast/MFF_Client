import React,{useState} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';


const Map = ()=>{
    const mapStyle = {
        height: '100vh',
        width: '100%',
        margin: '0 auto',
    }
    return(
         <div className='container'>
            <div className="header">
            <h2 className='heading'>Kenya Population as Per 2019 National Census Exercise</h2>
            <p className="text-muted">A choropleth map displaying Kenya population density as per the national census conducted <br/>in 2019
            Each County, details displayed by the map include, total population and number of each gender.</p></div>
            <div className="">
                <div className="">
                <MapContainer center={[1.286389, 38.817223]}
                zoom={6} scrollWheelZoom={true} style={mapStyle}>
                    <TileLayer
                        attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                </div>
            </div>
        </div>

    )
}
export default Map;
