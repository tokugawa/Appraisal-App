/*var comment = {
	name: '',
	date: '',
	commentText: '',
};*/

function getCurrentDateTime()//http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
{
	var currentdate = new Date(); 
	var datetime = (currentdate.getMonth()+1) + "/"
					+ currentdate.getDate()  + "/" 
					+ currentdate.getFullYear() + " @ "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
	return datetime;
}