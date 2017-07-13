//-------------------------------------------Jquery-------------------------------------------//
$(document).ready(function () {
	$("div#allcalc")
		.animate({top : '0px'} , 1000)
		.animate({width:'462px'} , 1000)
		.animate({height:'290px',padding:'20px'} , 1000 , function (){
                               
$("h1#online").fadeIn(1000 , function() {
  
  $("input#second-number").slideDown(1000);
  
  $("input#first-number").slideDown(1000 , function ( ) {$("h1#result").fadeIn(1000 , function () {
    
$("button.plus").fadeIn(800)  ;                               
$("button.minus").fadeIn(800); 
$("button.multiply").fadeIn(800)
})});  
})
                               
                           })
			$("h1#welcome").fadeIn(2400);
})
		
//-------------------------------------------Javascript-------------------------------------------//
var first_number = 		document.getElementById('first-number').value,
	second_number =		document.getElementById('second-number').value,
	plus_button =		document.getElementById('plus'),
	minus_button = 		document.getElementById('minus'),
	multiply_button = 	document.getElementById('multiply')
	result = 			document.getElementById('result');



 function plus () {
	var first_number = 		Number(document.getElementById('first-number').value),
	second_number =		Number(document.getElementById('second-number').value),
	plus_button =		document.getElementById('plus'),
	minus_button = 		document.getElementById('minus'),
	multiply_button = 	document.getElementById('multiply')
	result = 			document.getElementById('result');

	
	if (isNaN(first_number)|| isNaN(second_number)) {
		document.getElementById('warning').innerHTML = ("&#9888; " + "These Fields Accept Numbers Only");
	}else if (first_number == ""|| second_number == "") {
		document.getElementById('warning').innerHTML = ("&#9888; "+"Enter Your Numbers Please");
		
	}else {
	 document.getElementById('result').innerHTML= (Number(first_number) + Number(second_number));
	 document.getElementById('warning').innerHTML = ("");
	
	};
};

 function minus() {
	var first_number = 		document.getElementById('first-number').value,
	second_number =		document.getElementById('second-number').value,
	plus_button =		document.getElementById('plus'),
	minus_button = 		document.getElementById('minus'),
	multiply_button = 	document.getElementById('multiply')
	result = 			document.getElementById('result');

		if (isNaN(first_number)|| isNaN(second_number)) {
		document.getElementById('warning').innerHTML = ("&#9888; " + "These Fields Accept Numbers Only");
	}else if (first_number == ""|| second_number == "") {
		document.getElementById('warning').innerHTML = ("&#9888; "+"Enter Your Numbers Please");
	}else {
	 document.getElementById('result').innerHTML= (Number(first_number) - Number(second_number));
	 document.getElementById('warning').innerHTML = ("");
	
	};
}
function multiply() {
	var first_number = 		document.getElementById('first-number').value,
	second_number =		document.getElementById('second-number').value,
	plus_button =		document.getElementById('plus'),
	minus_button = 		document.getElementById('minus'),
	multiply_button = 	document.getElementById('multiply')
	result = 			document.getElementById('result');


		if (isNaN(first_number)|| isNaN(second_number)) {
		document.getElementById('warning').innerHTML = ("&#9888; " + "These Fields Accept Numbers Only");
	}else if (first_number == ""|| second_number == "") {
		document.getElementById('warning').innerHTML = ("&#9888; "+"Enter Your Numbers Please");
	}else {
	 document.getElementById('result').innerHTML= (Number(first_number) * Number(second_number));
	 document.getElementById('warning').innerHTML = ("");
	
	};
}
