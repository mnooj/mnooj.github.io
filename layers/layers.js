ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3031").setExtent([-2661585.000000, -2494398.500000, 2748309.250000, 2321809.500000]);
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
var format_AutomaticWeatherStations_2 = new ol.format.GeoJSON();
var features_AutomaticWeatherStations_2 = format_AutomaticWeatherStations_2.readFeatures(json_AutomaticWeatherStations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_AutomaticWeatherStations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutomaticWeatherStations_2.addFeatures(features_AutomaticWeatherStations_2);
var lyr_AutomaticWeatherStations_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutomaticWeatherStations_2, 
                style: style_AutomaticWeatherStations_2,
                interactive: true,
                title: '<img src="styles/legend/AutomaticWeatherStations_2.png" /> Automatic Weather Stations'
            });
var format_ResearchStations_3 = new ol.format.GeoJSON();
var features_ResearchStations_3 = format_ResearchStations_3.readFeatures(json_ResearchStations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_ResearchStations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResearchStations_3.addFeatures(features_ResearchStations_3);
var lyr_ResearchStations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResearchStations_3, 
                style: style_ResearchStations_3,
                interactive: true,
                title: '<img src="styles/legend/ResearchStations_3.png" /> Research Stations'
            });

lyr_Antarcticbasemap_0.setVisible(true);lyr_Satellites_1.setVisible(true);lyr_AutomaticWeatherStations_2.setVisible(true);lyr_ResearchStations_3.setVisible(true);
var layersList = [lyr_Antarcticbasemap_0,lyr_Satellites_1,lyr_AutomaticWeatherStations_2,lyr_ResearchStations_3];
lyr_Antarcticbasemap_0.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'surface': 'surface', });
lyr_Satellites_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Repo Link': 'Repo Link', });
lyr_AutomaticWeatherStations_2.set('fieldAliases', {'Name': 'Name', 'Repo Link': 'Repo Link', 'Region': 'Region', 'Elevation': 'Elevation', 'Lat/Long': 'Lat/Long', 'x': 'x', 'y': 'y', });
lyr_ResearchStations_3.set('fieldAliases', {'Name': 'Name', 'Repo Link': 'Repo Link', 'Region': 'Region', 'Lat/Long': 'Lat/Long', 'x': 'x', 'y': 'y', });
lyr_Antarcticbasemap_0.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'surface': 'TextEdit', });
lyr_Satellites_1.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'Repo Link': 'TextEdit', });
lyr_AutomaticWeatherStations_2.set('fieldImages', {'Name': 'TextEdit', 'Repo Link': 'TextEdit', 'Region': 'TextEdit', 'Elevation': 'TextEdit', 'Lat/Long': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', });
lyr_ResearchStations_3.set('fieldImages', {'Name': 'TextEdit', 'Repo Link': 'TextEdit', 'Region': 'TextEdit', 'Lat/Long': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', });
lyr_Antarcticbasemap_0.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'surface': 'no label', });
lyr_Satellites_1.set('fieldLabels', {'Name': 'inline label', 'Repo Link': 'inline label', });
lyr_AutomaticWeatherStations_2.set('fieldLabels', {'Name': 'inline label', 'Repo Link': 'inline label', 'Region': 'inline label', 'Elevation': 'inline label', 'Lat/Long': 'inline label', });
lyr_ResearchStations_3.set('fieldLabels', {'Name': 'inline label', 'Repo Link': 'inline label', 'Region': 'inline label', 'Lat/Long': 'inline label', });
lyr_ResearchStations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});