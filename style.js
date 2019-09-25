function cheack(){
	
	var a = document.getElementById('searchit').value;
	
	if (a=="kunal")
	{
		debugger;
		window.location = "file:///C:/Users/KUNAL-PC/Desktop/local/index.html"
		return false;
	}
	if (a=="motivation")
	{
		debugger;
		window.location = "file:///C:/Users/KUNAL-PC/Desktop/html/index.html"
		return false;
	}
	else
	{
			document.write("item not matched");
	}
	
	
}