$(document).ready(function() {

	crystals = ['assets/images/diamond_1.png','assets/images/diamond_2.png','assets/images/diamond_3.png','assets/images/diamond_4.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*10)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	function newGame() {

		counter = 0;
		$('#Score').text(counter);

		function randomnumbr(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var compnumbr = randomnumbr(29,99);

		$('.value').text(compnumbr);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#Score').text(counter);

		    if (counter == compnumbr){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > compnumbr){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});