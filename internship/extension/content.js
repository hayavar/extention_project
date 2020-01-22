document.getElementById("text").addEventListener("change",myfunction);

function myfunction(){
	console.log("myfunction is being called");
	var x= document.getElementById("text").value;
	if(x[x.length-1]=="."){
		var obj={'text':x};
		var xhttp=new XMLHttpRequest();
		xhttp.open('POST','http://127.0.0.1:5000/login',true);
		xhttp.setRequestHeader('Content-Type','application/json');
		xhttp.send(JSON.stringify(obj));
		xhttp.onload=function(){
			alert(`Recieved:${xhttp.response}`);
		}
	}
}

	


