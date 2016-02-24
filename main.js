document.getElementById("add").onclick =function(){
	var text= document.getElementById('idea').value;

	var li= '<li>' + text+ '</li>';
	document.getElementById('list').appendChild(li);
	console.log(text)
}