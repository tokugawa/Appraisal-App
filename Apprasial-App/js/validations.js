//Validation Functions
//Generic validation functions
function validateRadio(name, group)//validates a radio group
{
	if($('[name="'+name+'"]').is(':checked'))
	{
		$('#'+group).css("border","0px");
		return true;
	}
	$('#'+group).css("border","1px solid red");
		console.log(name);
	return false;
}
function validateDropdown(id)//validates a dropdown list(select)
{
	if($('#'+id).val().length > 0 && $('#'+id).prop('selectedIndex') > 0)
	{
		$('#'+id).css("border","0px");
		return true;
	}
	$('#'+id).css("border","1px solid red");
	console.log(id);
	return false;
}
function validateTextFilled(id)//validates that an input has any input
{
	if($('#'+id).val().length > 0)
	{
		$('#'+id).css("border","0px");
		return true;
	}
	$('#'+id).css("border","1px solid red");
		console.log(id);
	return false;
}
function validateTextNumber(id)//validates that any number was entered (positive and negative)
{
	if($('#'+id).val().length > 0 && $.isNumeric($('#'+id).val()))
	{
		$('#'+id).css("border","0px");
		return true;
	}
	$('#'+id).css("border","1px solid red");
		console.log(id);
	return false;
}
function validatePositiveNumber()//validates that only positive numbers are entered(0 or greater)
{
  var pattern = /^([0-9])$/;
  if(pattern.test($('#'+id).val()))
	{
		$('#'+id).css("border","0px");
		return true;
	}
	$('#'+id).css("border","1px solid red");
		console.log(id);
	return false;
}
function validateZipCode(id)//validates a zipcode(12345 or 12345-1234)
{
  var pattern = /^(([0-9]{5})|([0-9]{5}-[0-9]{4}))$/;
  //alert(pattern.test('4568a'));
  if(pattern.test($('#'+id).val()))
  {
    $('#'+id).css("border","0px");
		return true;
  }
   $('#'+id).css("border","1px solid red");
   	console.log(id);
	return false;
}
function validatePhoneNumber(id)//validates a phone number(123-456-7890 or 1234567890)
{	
	var pattern =/^((([0-9]{3})\-([0-9]{3})\-([0-9]{4}))|([0-9]{10}))$/;
	//alert(pattern.test('111-222-3333'));
	//alert(pattern.test('12345678as'));
	if(pattern.test($('#'+id).val()))
  {
    $('#'+id).css("border","0px");
		return true;
  }
   $('#'+id).css("border","1px solid red");
   	console.log(id);
	return false;
}
function validateEmail(id)//validates and email was entered (abc1@abv1.com)
{
	var pattern = /^([a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|gov))$/;
	//alert(pattern.test('b1!@b.com'));
	if(pattern.test($('#'+id).val()))
  {
    $('#'+id).css("border","0px");
		return true;
  }
  $('#'+id).css("border","1px solid red");
  	console.log(id);
	return false;
}
function validateDate(id)//validates a date (mm/dd/yyyy)
{
	var pattern =/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;
	//alert(pattern.test('aa/22/3333'));
	if(pattern.test($('#'+id).val()))
  {
    $('#'+id).css("border","0px");
		return true;
  }
  $('#'+id).css("border","1px solid red");
  	console.log(id);
	return false;
}
function validateDependent(id, other)//validates that a required textbox is filled when a dependent radio or dropdown is selected
{
  if($('#'+id).is('option') && (!$('#'+id).is(':selected') || ($('#'+id).is(':selected')) && validateTextFilled(other)))
  {
    $('#'+other).css("border","0px");
		return true;
  }
  else if($('#'+id).is('input') && (!$('#'+id).is(':checked') || ($('#'+id).is(':checked')) && validateTextFilled(other)))
  {
    $('#'+other).css("border","0px");
		return true;
  }
  $('#'+other).css("border","1px solid red");
  	console.log(id);
	return false;
}
///////////////////////////////////////////////////

//validate all inputs with class validations and using id's
function validateAllTabsByClass()
{
	var validated = true;
	
	//check all input
	$('.text-filled').each(function(i, element){//text filled
		try{
			if(!validateTextFilled($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	$('.text-number').each(function(i, element){//any number
		try{
			if(!validateTextNumber($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
  $('.positive-number').each(function(i, element){//positive numbers
		try{
			if(!validateTextNumber($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
  $('.zip-code').each(function(i, element){//zip codes
		try{
			if(!validateZipCode($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	$('.dropdown').each(function(i, element){//dropdown lists
		try{
			if(!validateDropdown($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	$('.radio').each(function(i, element){//radio buttons and checkboxes
		try{
			if(!validateRadio($(this).attr('name'),$(this).attr('name')+'-group'))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	$('.email').each(function(i, element){//email addresses
		try{
			if(!validateEmail($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	$('.v-phone-number').each(function(i, element){//phone numbers
		try{
			console.log(element);
			if(!validatePhoneNumber($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	$('.date').each(function(i, element){//dates
		try{
			if(!validateDate($(this).attr('id')))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
  $('.dependent').each(function(i, element){//text box depends on other input
		try{
			if(!validateDependent($(this).attr('id'),$(this).attr('id')+"-other"))
				validated = false;
		}
		catch(error){
			validated = false;
			console.log(error);
		}
	});
	
	return validated;
}
///////////////////////////////////////////////