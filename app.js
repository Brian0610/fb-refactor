$(document).ready(function(){

	var userNumber = +prompt("Pick a number");


  	while(isNaN(userNumber * userNumber)){ 		
  		alert("Please pick a NUMBER, Einstein!"); 
  		var userNumber = +prompt("Pick a number");
  	}

  	fizzBuzzer(userNumber);  		
  		
}); 

var fizzBuzzer = function(number){
		for(i=1; i <= number; i++){
			if(i %3 === 0 && i %5 === 0){
				$("#container").append("<p>FizzBuzz</p>"); 
			}

			else if(i %3 === 0){
				$("#container").append("<p>Fizz</p>");
			}

			else if (i %5 === 0){
				$("#container").append("<p>Buzz</p>");
			} 

			else {
				$("#container").append("<p>" + i + "</p>");  
			}
		}
	};   