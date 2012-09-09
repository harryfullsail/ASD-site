$(function(){
	
	$.ajax({
		url: 'xhr/list1.php',
		type: 'GET',
		dataType: 'CSV',
		success: function(response){
			var lines = data.split("\n");
			for (var lineNum = 0; lineNum < lines.length; lineNum++) {
			var row = line[lineNum];
			var columns = row.split(",");
			console.log(columns);
		).appendTo('#CSV');
		
			}
			)
		};
	};
});