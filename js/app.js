$(document).ready(function(){
	$('#the-form').on('click', '#the-button', function( event ){
		event.preventDefault();
		var foo = $('#the-form').find('#list-item-input').val();
		addItem(foo);
	});
	$('a.dlt').on('click', function( event ){
		event.preventDefault();
		alert("why!?");
		$(this).parent().remove();
	});
});

function addItem ( itemText ) {
	var bar = $("<li>"+itemText+"<a class='dlt'>x</a></li>");
	$('#the-list').append(bar);
}