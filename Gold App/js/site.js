$(function(){
	
	$.ajax({
		url: 'xhr/list.php',
		type: 'GET',
		dataType: 'json',
		success: function(response){
			for(var i=0, j=response.book1.length; i<j; i++){
				var book = response.book1[i];
				$(''+
				'<div data-role="content">'+
					'<p>'+ book.lists +'</p>'+
					'<p>'+ book.dateRead +'</p>'+
					'<h1>'+ book.author +'</h1>'+
					'<h2>'+ book.title +'</h2>'+
					'<p>'+ book.publicationDate +'</p>'+
					'<p>'+ book.bookSeries +'</p>'+
					'<p>'+ book.genre +'</p>'+
					'<p>'+ book.age +'</p>'+
					'<p>'+ book.subject +'</p>'+
					'<p>'+ book.descriptionOfBook +'</p>'+
					'<p>'+ book.rate +'</p>'+
					'<p>'+ book.comments +'</p>'+
					
				'</div>'
			).appendTo('#json');
			
			};
				
		}
	});
});