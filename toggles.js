function toggle1() {
	var ele1 = document.getElementById("toggleText1");
	var ele2 = document.getElementById("toggleText2");
	var ele3 = document.getElementById("toggleText3");
	var ele4 = document.getElementById("toggleText4");
	if(ele1.style.display == "inline-block") {
    	ele1.style.display = "none";
  	}
	else {
		if(ele2.style.display == "inline-block") {
			ele2.style.display = "none";
		}	
		if(ele3.style.display == "inline-block") {
			ele3.style.display = "none";
		}
		if(ele4.style.display == "inline-block") {
			ele4.style.display = "none";
		}	
		ele1.style.display = "inline-block";
		ele1.style.margin = 'auto';
		ele1.style.marginRight = 'auto';
	}
} 
function toggle2() {
	var ele1 = document.getElementById("toggleText1");
	var ele2 = document.getElementById("toggleText2");
	var ele3 = document.getElementById("toggleText3");
	var ele4 = document.getElementById("toggleText4");
	if(ele2.style.display == "inline-block") {
    	ele2.style.display = "none";
  	}
	else {
		if(ele3.style.display == "inline-block") {
			ele3.style.display = "none";
		}	
		if(ele1.style.display == "inline-block") {
			ele1.style.display = "none";
		}
		if(ele4.style.display == "inline-block") {
			ele4.style.display = "none";
		}	
		ele2.style.display = "inline-block";
		ele2.style.margin= 'auto';
	}
} 
function toggle3() {
	var ele1 = document.getElementById("toggleText1");
	var ele2 = document.getElementById("toggleText2");
	var ele3 = document.getElementById("toggleText3");
	var ele4 = document.getElementById("toggleText4");
	if(ele3.style.display == "inline-block") {
    	ele3.style.display = "none";
  	}
	else {
		if(ele1.style.display == "inline-block") {
			ele1.style.display = "none";
		}	
		if(ele2.style.display == "inline-block") {
			ele2.style.display = "none";
		}
		if(ele4.style.display == "inline-block") {
			ele4.style.display = "none";
		}	
		ele3.style.display = "inline-block";
		ele3.style.margin= 'auto';
	}
} 
function toggle4() {
	var ele1 = document.getElementById("toggleText1");
	var ele2 = document.getElementById("toggleText2");
	var ele3 = document.getElementById("toggleText3");
	var ele4 = document.getElementById("toggleText4");
	if(ele4.style.display == "inline-block") {
    	ele4.style.display = "none";
  	}
	else {
		if(ele1.style.display == "inline-block") {
			ele1.style.display = "none";
		}	
		if(ele2.style.display == "inline-block") {
			ele2.style.display = "none";
		}
		if(ele3.style.display == "inline-block") {
			ele3.style.display = "none";
		}
		ele4.style.display = "inline-block";
		ele4.style.width = '70%';			
		ele4.style.minwidth = '90%';
		ele4.style.marginLeft = '15%';
		ele4.style.marginRight = '15%';
	}
} 
