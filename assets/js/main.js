function elPeso(){
	var elPeso = document.getElementById('peso').value;
	var planeta = document.getElementById("elegir-planeta").value;


	if(planeta == "mercurio"){
		alert("Tu peso en Mercurio es de: " + ((parseInt(elPeso) * 3.7) / 9.8).toFixed(3) + "kg");
	}
	else if(planeta == "venus"){
		alert("Tu peso en Mercurio es de: " + ((parseInt(elPeso) * 8.87) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta == "saturno"){
		alert("Tu peso en Saturno es de: " + ((parseInt(elPeso) * 10.44) / 9.8).toFixed(3) + " Kg");
	}else if(planeta == "urano"){
		alert("Tu peso en Urano es de: " + ((parseInt(elPeso) * 8.69) / 9.8).toFixed(3) + " Kg");
	}
}
