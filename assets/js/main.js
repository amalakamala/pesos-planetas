function elPeso(){
	var elPeso = document.getElementById('peso').value;
	var planeta = document.getElementById("elegir-planeta").value;


	if(planeta == "mercurio"){
		alert("Tu peso en Mercurio es de: " + ((parseInt(elPeso) * 3.7) / 9.8));
	}
	else if(planeta == "venus"){
		alert("Tu peso en Mercurio es de: " + ((parseInt(elPeso) * 8.87) / 9.8));

		

		if(planeta =="neptuno"){
			alert("Tu peso en Neptuno es de: " +((parseInt(elPeso) * 11.15) /9.8));
		}
		else if(planeta =="jupiter"){
			alert("Tu peso en Jupiter es de: " +((parseInt(elPeso) * 24.79) / 9.8));
		}

	}
}
/*

 
 //MARTE
(parseInt(elPeso) * 3.711) / 9.8	

//JÚPITER
(parseInt(elPeso) * 24.79) / 9.8

//SATURNO
(parseInt(elPeso) * 10.44) / 9.8

//URANO
(parseInt(elPeso) * 8.69) / 9.8

//NEPTUNO
(parseInt(elPeso) * 11.15) / 9.8