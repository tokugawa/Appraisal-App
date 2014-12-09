/*var comment = {
	name: '',
	date: '',
	commentText: '',
};*/

function getCurrentDateTime()//http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
{
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " @ "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
	return datetime;
}