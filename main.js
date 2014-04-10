$(document).on('ready', function() {
	// when user clicks 'Click to Update'
	$('#update-btn').on('click', function(){
		// show the editable stuff
		$('.update-box').toggle('slow');
		// sets value of the update-box inputs to an empty string
		$('.update-box input').val(''); 
		if($('#update-btn').text() === "Hide Edit Form"){
			$('#update-btn').text("Click to Update");
		}
		else {
			$('#update-btn').text("Hide Edit Form");
		}
	});

	$('#form-id').on('submit', function(){
		// same as e.preventDefault, needs e in function param
		return false;
	});
	// when user clicks 'Save Changes'
	$('#save-update-btn').on('click', function(){
		// take the user input name, age, and fav w/e
		var newInputName = $('.name-row > .newInput').val();
		var newInputAge = $('.age-row > .newInput').val();
		var newInputFav = $('.fav-row > .newInput').val();
		
		if(newInputName !== '') {
			$('.user-name').text(newInputName);
		}

		if(newInputAge !== '') {
			$('.user-age').text(newInputAge);
		}

		if(newInputFav !== '') {
			$('.user-fav').text(newInputFav);
		}

	});
});

// if newInputName does not = an empty string
// then do the update


// **Problems**
// how to get the updated #update-btn to hide?

// When the form is hidden, the button should say 'Show Form'. When the form is shown, the button should say 'Hide Form' and perform the appropriate action. Add a submit handler to the form element. On submit, update the text of user's profile below. You will have to cancel the default browser behavior, otherwise the submit will refresh the page.