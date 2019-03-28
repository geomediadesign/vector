
var mystyle =     {
        "version": 8,
        "name": "data",
        "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",
        "sources": {
    "wm_visdata":{
        "type": "vector",
        "tiles":  [
            "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
        ]
    }
},
        "layers": [
            {
                "id": "background",
                "type": "background",
                "paint": {
                    "background-color": "#474747"
                }
            },
            {
                "id": "boundaries",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "boundaries",
                "paint": {
                    "line-color": "#ff4d99"
                }
            },
            {
                "id": "agricultural",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "agricultural",
                "paint": {
                    "line-color": "#adce9b"
                }
            },
            {
                "id": "infrastructure",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "infrastructure",
                "paint": {
                    "line-color": "#ffffff"
                }
            },
            {
                "id": "natural",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "natural",
                "paint": {
                    "line-color": "#c3dbb6"
                }
            },
            {
                "id": "railways",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "railways",
                "paint": {
                    "line-color": "#ee00ee"
                }
            },
            {
                "id": "roads",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "roads",
                "paint": {
                    "line-color": "#f9e11e"
                }
            },
            {
                "id": "builtup",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "builtup",
                "paint": {
                    "line-color": "#ff4d4d"
                }
            },
            {
                "id": "water",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "water",
                "paint": {
                    "line-color": "#80bde3"
                }
            },
            {
                "id": "waterline",
                "type": "line",
                "source": "wm_visdata",
                "source-layer": "waterline",
                "paint": {
                    "line-color": "#80bde3"
                }
            },
            {
    "id": "place-labels",
    "type": "symbol",
    "source": "wm_visdata",
    "source-layer": "labels",
    "filter":
        [
            "==",
            "type",
            "place"
        ],
    "minzoom": 8,
    "maxzoom": 16,
    "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-size": 16,
        "text-font":  ["Lato"],
        "text-field": "{name}",
    },
    "paint": {
        "text-halo-blur": 0.5,
        "text-color":"#1d464d",
        "text-halo-width": 1,
        "text-halo-color": "#fff"
    }
}      
        ]
};

var map = new mapboxgl.Map({
        container: 'map',
        style: mystyle,
        hash: true,
        zoom: 13,
        pitch: 60,
        bearing: 0.4,
        center: [ 4.8, 52.4]
    });

