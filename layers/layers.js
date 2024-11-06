var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_srm1_1 = new ol.format.GeoJSON();
var features_srm1_1 = format_srm1_1.readFeatures(json_srm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm1_1.addFeatures(features_srm1_1);
var lyr_srm1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srm1_1, 
                style: style_srm1_1,
                popuplayertitle: "srm1",
                interactive: true,
                title: '<img src="styles/legend/srm1_1.png" /> srm1'
            });
var format_srmhostels_2 = new ol.format.GeoJSON();
var features_srmhostels_2 = format_srmhostels_2.readFeatures(json_srmhostels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmhostels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmhostels_2.addFeatures(features_srmhostels_2);
var lyr_srmhostels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmhostels_2, 
                style: style_srmhostels_2,
                popuplayertitle: "srm-hostels",
                interactive: true,
                title: '<img src="styles/legend/srmhostels_2.png" /> srm-hostels'
            });

lyr_OSMStandard_0.setVisible(true);lyr_srm1_1.setVisible(true);lyr_srmhostels_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_srm1_1,lyr_srmhostels_2];
lyr_srm1_1.set('fieldAliases', {'id': 'id', });
lyr_srmhostels_2.set('fieldAliases', {'id': 'id', 'Population': 'Population', 'block name': 'block name', });
lyr_srm1_1.set('fieldImages', {'id': '', });
lyr_srmhostels_2.set('fieldImages', {'id': '', 'Population': '', 'block name': '', });
lyr_srm1_1.set('fieldLabels', {'id': 'no label', });
lyr_srmhostels_2.set('fieldLabels', {'id': 'no label', 'Population': 'no label', 'block name': 'no label', });
lyr_srmhostels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});