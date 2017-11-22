

function generateBifSquare(str) {
	var n = Math.ceil(Math.sqrt(str.length));
    var tblBody = document.createElement("tbody");

    document.getElementById("bifTable").innerHTML = "";

	for (var j = -1; j < n; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = -1; i < n; i++) {

         	var cell = document.createElement("td");    
        	if (j == -1) {
        		if (i == -1) {
            		var cellText = document.createTextNode(""); 
        		} else {
            		var cellText = document.createTextNode(i); 
        		}
        	} else {
        		if (i == -1) {
            		var cellText = document.createTextNode(j); 
        		} else {
            		var cellText = document.createTextNode((j*n+i<str.length?str[j*n+i]:"")); 
        		}
        	}
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    document.getElementById("bifTable").appendChild(tblBody);

}

document.getElementById("BIF_squaretxt").addEventListener("keyup", function() {
  	updateBifidGUI()
}); 

document.getElementById("BIF_periodtxt").addEventListener("keyup", function() {
	updateBifidGUI()
}); 

document.getElementById("BIF_squareshuffle").addEventListener("click", function() {
  	document.getElementById("BIF_squaretxt").value = randomise(document.getElementById("BIF_squaretxt").value);
  	updateBifidGUI()
}); 

document.getElementById("BIF_mes2ciph").addEventListener("keyup", function() {
	updateBifidGUI()
}); 

document.getElementById("BIF_ciph2Mes").addEventListener("keyup", function() {
	updateBifidGUI()
}); 

function updateBifidGUI() {
  document.getElementById("BIF_ciphFromMes").value = new Bifid(document.getElementById("BIF_squaretxt").value,parseInt(document.getElementById("BIF_periodtxt").value)).encrypt(document.getElementById("BIF_mes2ciph").value);
  document.getElementById("BIF_mesFromCiph").value = new Bifid(document.getElementById("BIF_squaretxt").value,parseInt(document.getElementById("BIF_periodtxt").value)).decrypt(document.getElementById("BIF_ciph2Mes").value);
  generateBifSquare(document.getElementById("BIF_squaretxt").value);
}