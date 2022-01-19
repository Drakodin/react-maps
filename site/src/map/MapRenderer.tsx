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
                // You can add event handlers here that have their own special properties
                // Features are pushed in using the Shapefile and they can be interacted with.
                
                // ReactDOMServer is available to access any nodes created or needed for functionality
            }
        }).addTo(map);

        /**
         * Loads shapefiles from a passed in URL string to be read by the shpjs
         * module then subsequently mapped onto the exsiting map.
         */
        // shp(props.zipURL).then((data: any) => geo.addData(data));
    }, []);
    return null;
}

export default ShapeRenderer;