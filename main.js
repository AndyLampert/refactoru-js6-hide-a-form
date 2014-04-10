$(document).on('ready', function() {
	// when user clicks 'Click to Update'
	$('#update-btn').on('click', function(){
		// show the editable stuff
		$('.update-box').css("display", "block");
	});
	// when user clicks 'Save Changes'
	$('#save-update-btn').on('click', function(){
		// take the user input name, age, and fav w/e
		var newInputName = $('.name-row > .newInput').val();
		var newInputAge = $('.age-row > .newInput').val();
		var newInputFav = $('.fav-row > .newInput').val();
		// put the var (that contains new data) into the inputs above
		$('.user-name').text(newInputName);
		$('.user-age').text(newInputAge);
		$('.user-fav').text(newInputFav);
	});

	// when user clicks 'Cancel Update'
	$('#hide-update').on('click', function(){
		$('.update-box').css('display', 'none');
	});
});