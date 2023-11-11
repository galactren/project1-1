var $ = function (id) {
	return document.getElementById(id);
	}
	var processEntry = function() {
	var total;
	var income = parseFloat( $("income").value );
	$("tax").value = calcTaxes(income);
	function calcTaxes(income){
	var calculate = 0;
	if (income > 0 && income <= 9225){
	tax = (income * 0.10);
	}else if (income <= 37450 && income > 9225) {
	tax = (income - 9225) * 0.15 + 922.50;
	}else if (income <= 90750 && income > 37450) {
	tax = (income - 37450) * 0.25 + 5156.25;
	}else if (income <= 189300 && income > 90750) {
	tax = (income - 90750) * 0.28 + 18481.25 ;
	}else if (income <= 411500 && income > 189300) {
	tax = (income - 189300) * 0.33 + 46075.25 ;
	}else if (income <= 413200 && income > 411500) {
	tax = (income - 411500) * 0.35 + 119401.25 ;
	}else if (income > 413200) {
	tax = (income - 413200) * 0.396 + 11999625 ;
	}
	
	tax = tax.toFixed(2);
	
	return tax;
	
	}
	}
	window.onload = function () {
	$("calculate").onclick = processEntry;
	}
