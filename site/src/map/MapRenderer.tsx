import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { Feature, FeatureCollection } from 'geojson';
import shp from 'shpjs';
import ReactDOMServer from 'react-dom/server';

interface RenderProps {
    zipURL: string;
}

let featuresEmpty: Feature[] = [];

let baseJSON: FeatureCollection = {
    type: "FeatureCollection",
    features: featuresEmpty
}

const ShapeRenderer = (props: RenderProps) => {
    const map = useMap();
    React.useEffect(() => {
        const geo = L.geoJSON(baseJSON, {
            onEachFeature: (f, l) => {
                let out = [];
                if (f.properties) {
                    for (let key in f.properties) {
                        out.push(f.properties[key]);
                    }
                }
            }
        }).addTo(map);
        // Shape Data load
        // shp(props.zipURL).then((data: any) => geo.addData(data));
    }, []);
    return null;
}

export default ShapeRenderer;