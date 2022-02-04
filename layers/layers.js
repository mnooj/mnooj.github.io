ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3031").setExtent([-2731476.245198, -2582239.923155, 2886172.333029, 2393799.916707]);
var wms_layers = [];

var format_Antarcticbasemap_0 = new ol.format.GeoJSON();
var features_Antarcticbasemap_0 = format_Antarcticbasemap_0.readFeatures(json_Antarcticbasemap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_Antarcticbasemap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antarcticbasemap_0.addFeatures(features_Antarcticbasemap_0);
var lyr_Antarcticbasemap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antarcticbasemap_0, 
                style: style_Antarcticbasemap_0,
                interactive: false,
                title: 'Antarctic base map'
            });
var format_Satellites_1 = new ol.format.GeoJSON();
var features_Satellites_1 = format_Satellites_1.readFeatures(json_Satellites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_Satellites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Satellites_1.addFeatures(features_Satellites_1);
var lyr_Satellites_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Satellites_1, 
                style: style_Satellites_1,
                interactive: true,
                title: '<img src="styles/legend/Satellites_1.png" /> Satellites'
            });
var format_AWSSite_2 = new ol.format.GeoJSON();
var features_AWSSite_2 = format_AWSSite_2.readFeatures(json_AWSSite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_AWSSite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AWSSite_2.addFeatures(features_AWSSite_2);
var lyr_AWSSite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AWSSite_2, 
                style: style_AWSSite_2,
                interactive: true,
                title: '<img src="styles/legend/AWSSite_2.png" /> AWS Site'
            });
var format_ResearchStation_3 = new ol.format.GeoJSON();
var features_ResearchStation_3 = format_ResearchStation_3.readFeatures(json_ResearchStation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_ResearchStation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResearchStation_3.addFeatures(features_ResearchStation_3);
var lyr_ResearchStation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResearchStation_3, 
                style: style_ResearchStation_3,
                interactive: true,
                title: '<img src="styles/legend/ResearchStation_3.png" /> Research Station'
            });

lyr_Antarcticbasemap_0.setVisible(true);lyr_Satellites_1.setVisible(true);lyr_AWSSite_2.setVisible(true);lyr_ResearchStation_3.setVisible(true);
var layersList = [lyr_Antarcticbasemap_0,lyr_Satellites_1,lyr_AWSSite_2,lyr_ResearchStation_3];
lyr_Antarcticbasemap_0.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'surface': 'surface', });
lyr_Satellites_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Repo Link': 'Repo Link', });
lyr_AWSSite_2.set('fieldAliases', {'fid': 'fid', 'AWS Name': 'AWS Name', 'Repo Link': 'Repo Link', 'Region': 'Region', 'Elevation': 'Elevation', 'Lat/Long': 'Lat/Long', });
lyr_ResearchStation_3.set('fieldAliases', {'id': 'id', 'Station': 'Station', 'Repo Link': 'Repo Link', });
lyr_Antarcticbasemap_0.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'surface': 'TextEdit', });
lyr_Satellites_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Repo Link': 'TextEdit', });
lyr_AWSSite_2.set('fieldImages', {'fid': 'Hidden', 'AWS Name': 'TextEdit', 'Repo Link': 'TextEdit', 'Region': 'TextEdit', 'Elevation': 'TextEdit', 'Lat/Long': 'TextEdit', });
lyr_ResearchStation_3.set('fieldImages', {'id': 'TextEdit', 'Station': 'TextEdit', 'Repo Link': '', });
lyr_Antarcticbasemap_0.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'surface': 'no label', });
lyr_Satellites_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Repo Link': 'inline label', });
lyr_AWSSite_2.set('fieldLabels', {'AWS Name': 'inline label', 'Repo Link': 'inline label', 'Region': 'inline label', 'Elevation': 'inline label', 'Lat/Long': 'inline label', });
lyr_ResearchStation_3.set('fieldLabels', {'id': 'no label', 'Station': 'inline label', 'Repo Link': 'inline label', });
lyr_ResearchStation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});