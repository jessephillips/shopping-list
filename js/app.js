$(document).ready(function(){
	$('#the-form').on('click', '#the-button', function( event ){
		event.preventDefault();
		var foo = $('#the-form').find('#list-item-input').val();
		addItem(foo);
		$('#the-form').find('#list-item-input').val("");
	});
	$('#the-list').on('click', '.dlt', function( event ){
		event.preventDefault();
		//alert("why!?");
		$(this).parent().remove();
	});

	$('#the-list').on('click', '.unchecked', function( event ){
		//alert("check it");
		$(this).find('a').remove();
		$(this).addClass('checked').removeClass('unchecked');

	})
	.on('click', '.checked', function(){
		var dltBox = $('<a class="dlt">x</a>');
		$(this).addClass('unchecked')
		.removeClass('checked')
		.append(dltBox);
	});
	$('footer').on('click', function(){
		$(this).find('.instructions').toggle();
	});
	$(function() {
    $( "#the-list" ).sortable();
    $( "#the-list" ).disableSelection();
  	});
});

function addItem ( itemText ) {
	var bar = $('<li class="unchecked"><span>'+itemText+'</span><a class="dlt">x</a></li>');
	$('#the-list').append(bar);
}