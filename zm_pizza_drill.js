
function place_order() {
	descriptiontext = ""; // These initialize as empty strings but get passed from  
	subpricetext = ""; // function to function, growing line by line into a full receipt
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			descriptiontext = descriptiontext+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		subpricetext = subpricetext+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		subpricetext = subpricetext+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		subpricetext = subpricetext+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		subpricetext = subpricetext+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,descriptiontext,subpricetext); 
};	


function getMeat(runningTotal,descriptiontext,subpricetext) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
		descriptiontext = descriptiontext+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				subpricetext = subpricetext + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				subpricetext = subpricetext + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				subpricetext = subpricetext + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,descriptiontext,subpricetext);
};

function getVeggie(runningTotal,descriptiontext,subpricetext) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
		descriptiontext = descriptiontext+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				subpricetext = subpricetext + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				subpricetext = subpricetext + 1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				subpricetext = subpricetext + 1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,descriptiontext,subpricetext);
};

function getCheese(runningTotal,descriptiontext,subpricetext) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
	}
	subpricetext = subpricetext+cheeseTotal+"<br>";
	descriptiontext = descriptiontext+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,descriptiontext,subpricetext);
};

function getSauce(runningTotal,descriptiontext,subpricetext) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			descriptiontext = descriptiontext + selectedSauce +"<br>";
		}
	}
	subpricetext = subpricetext + 0 + "<br>";
	getCrust(runningTotal,descriptiontext,subpricetext)
};

function getCrust(runningTotal,descriptiontext,subpricetext) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			descriptiontext = descriptiontext + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	subpricetext = subpricetext + crustTotal + "<br>";
	document.getElementById("description").innerHTML=descriptiontext;
	document.getElementById("subprice").innerHTML=subpricetext;
	document.getElementById("totalprice").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

