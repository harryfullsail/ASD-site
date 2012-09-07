$(function(){
	
	$.ajax({
		//url: 'xhr/list.php',
		type: 'GET',
		dataType: 'CSV ',
		success: function(response){
			console.log(response);
		}
	});
});