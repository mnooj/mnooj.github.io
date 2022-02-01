ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3031").setExtent([-2661585.000000, -2505086.680847, 2806625.822651, 2424836.956068]);
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
var format_AutomaticWeatherStation_2 = new ol.format.GeoJSON();
var features_AutomaticWeatherStation_2 = format_AutomaticWeatherStation_2.readFeatures(json_AutomaticWeatherStation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_AutomaticWeatherStation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutomaticWeatherStation_2.addFeatures(features_AutomaticWeatherStation_2);
var lyr_AutomaticWeatherStation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutomaticWeatherStation_2,
maxResolution:28004.466152261964,
 
                style: style_AutomaticWeatherStation_2,
                interactive: true,
                title: '<img src="styles/legend/AutomaticWeatherStation_2.png" /> Automatic Weather Station'
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

lyr_Antarcticbasemap_0.setVisible(true);lyr_Satellites_1.setVisible(true);lyr_AutomaticWeatherStation_2.setVisible(true);lyr_ResearchStation_3.setVisible(true);
var layersList = [lyr_Antarcticbasemap_0,lyr_Satellites_1,lyr_AutomaticWeatherStation_2,lyr_ResearchStation_3];
lyr_Antarcticbasemap_0.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'surface': 'surface', });
lyr_Satellites_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Repo Link': 'Repo Link', });
lyr_AutomaticWeatherStation_2.set('fieldAliases', {'Station': 'Station', 'Repo Link': 'Repo Link', 'AWS Home': 'AWS Home', 'Lat/Long': 'Lat/Long', 'Elevation': 'Elevation', });
lyr_ResearchStation_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Link': 'Link', });
lyr_Antarcticbasemap_0.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'surface': 'TextEdit', });
lyr_Satellites_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Repo Link': 'TextEdit', });
lyr_AutomaticWeatherStation_2.set('fieldImages', {'Station': 'TextEdit', 'Repo Link': 'TextEdit', 'AWS Home': 'TextEdit', 'Lat/Long': 'TextEdit', 'Elevation': 'TextEdit', });
lyr_ResearchStation_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_Antarcticbasemap_0.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'surface': 'no label', });
lyr_Satellites_1.set('fieldLabels', {'id': 'no label', 'Name': 'header label', 'Repo Link': 'header label', });
lyr_AutomaticWeatherStation_2.set('fieldLabels', {'Station': 'header label', 'Repo Link': 'header label', 'AWS Home': 'header label', 'Lat/Long': 'header label', 'Elevation': 'header label', });
lyr_ResearchStation_3.set('fieldLabels', {'id': 'no label', 'Name': 'header label', 'Link': 'header label', });
lyr_ResearchStation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});