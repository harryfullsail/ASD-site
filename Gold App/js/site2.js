<?xml version="1.0" encoding="UTF-8"?>

$(function(){
	
	$.ajax({
		url: 'xhr/list2.php',
		type: 'GET',
		dataType: 'XML',
		success: function(response){
		var data = $.parseXML(xml);
		var items =$( data );
		item.find("item").each(function(){
			var item = $(this);
			console.log("Name:", item.find("name"));
			).appendTo('#XML');
				}
			);
		}
 });