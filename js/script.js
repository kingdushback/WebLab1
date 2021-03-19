function DoTheThing()
{
	//lCLxim3d821EKm5oV8cNluJtY371GgCbd3JuHu3l	
	var request = new XMLHttpRequest();
	var url = "http://numbersapi.com/";
	url += document.getElementById("number").value;

	if(document.getElementById("year").checked)
	{
		url += "/year";
	}
	if(document.getElementById("trivia").checked)
	{
		url += "/trivia";
	}
	if(document.getElementById("math").checked)
	{
		url += "/math";
	}
	if(document.getElementById("date").checked)
	{
		url += "/date";
	}

	url += "?json";

	if (document.getElementById("Ceil").checked)
	{
		url += "&notfound=ceil"
	}
	if (document.getElementById("Floor").checked)
	{
		url += "&notfound=floor"
	}

	

    console.log(url);
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function()
    {
    	console.log(request.response); 
		var result = request.response;

		document.getElementById("result").innerHTML = result.text;
    }
}