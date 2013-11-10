jQuery(document).ready(function ($) {

	function createEquations (maxNumber, howMany) {
		var maxNumber = $('input.maxNumber').val();
		var howMany = $('input.howMany').val();
		var theOperator = $('input[name="operator"]:checked').val();
		var basicAlgebra = $('input[name="algebra"]:checked').val();

		var randomClassNum = 1+ Math.floor(Math.random() * 10000);

		var operators = {
	    '+': function(a, b) { return a + b },
	    '-': function(a, b) { return a - b },
	    '*': function(a, b) { return a * b },
	    '/': function(a, b) { return a / b },
		};

		// Create the UL list to append the questions to
		$('#content').append('<h3>' + howMany + ' Questions with a High Number of ' + maxNumber + '</h3><ul class="max_' + randomClassNum + '"></ul>');

		// Basic Algebra
		if (basicAlgebra == 'yes') {

				if (theOperator == '+' || theOperator == '*') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						var number2 = 1 + Math.floor(Math.random() * maxNumber);
						var answer = operators[theOperator](number1, number2);
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer algebra-hopeful-answer" />'

				    $('ul.max_' + randomClassNum).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> ' + theOperator + ' ' + answer_box + ' = <span class="algebra-answer">' + answer + '</span><a id="check-answer_' + i + '" class="btn answer_'+ number2 +'" href="#">Check Answer</a><span class="checker"></span></li>');
				  	i++; // Increment i
					}
				}

				if (theOperator == '-') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						// Only get a number that's <= than number1
						var number2 = 1 + Math.floor(Math.random() * number1);


						var answer = operators[theOperator](number1, number2);
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer algebra-hopeful-answer" />'

				    $('ul.max_' + randomClassNum).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> - ' + answer_box + ' = <span class="algebra-answer">' + answer + '</span><a id="check-answer_' + i + '" class="btn answer_'+ number2 +'" href="#">Check Answer</a><span class="checker"></span></li>');

				  	i++; // Increment i
					}
				}

				if (theOperator == '/') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);

						// Get all numbers that can be divided by number1 without a remainder
						var iNumber=1;
						// Create the array to store the whole numbers that divide evenly
						var divisibles = [];
						// Set a counter for the array
						var iDivisible = 1;
						// divide all the possible numbers
						while (iNumber <= number1) {
							var findDivisibles = number1/iNumber;

							if ( findDivisibles % 1 != 0 ) {
								// If it doesn't equal zero, then there's a remainder, so don't do anything
							} else {
								// There's no remainder!  Let's store that number in the divisibles array
								divisibles[iDivisible]=iNumber;
								// Increase the counter so we don't overwrite our last entry
								iDivisible++;
							}
							iNumber++;
						}
						// Let's randomly select one of the values from the array
						// iDivisible - 1 should be all the possibles keys of the divisibles array
						var divisibleSelector = 1 + Math.floor(Math.random() * (iDivisible - 1));
						// Set number2 as one of the entries from te divisbles array
						var number2 = divisibles[divisibleSelector];

						var answer = operators[theOperator](number1, number2);
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer algebra-hopeful-answer" />'

					   $('ul.max_' + randomClassNum).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> ' + theOperator + ' ' + answer_box + ' = <span class="algebra-answer">' + answer + '</span><a id="check-answer_' + i + '" class="btn answer_'+ number2 +'" href="#">Check Answer</a><span class="checker"></span></li>');

				  	i++; // Increment i
					}
				} // End if operator /

			// It's not basic Algebra, so do this instead
			} else {

				if (theOperator == '+' || theOperator == '*') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						var number2 = 1 + Math.floor(Math.random() * maxNumber);

						var answer = operators[theOperator](number1, number2);
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

				    $('ul.max_' + randomClassNum).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> ' + theOperator + ' <span class="second-number">' + number2 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'" href="#">Check Answer</a><span class="checker"></span></li>');
				  	i++; // Increment i
					}
				}
				if (theOperator == '-') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						var number2 = 1 + Math.floor(Math.random() * number1);

						var answer = operators[theOperator](number1, number2);
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

				    $('ul.max_' + randomClassNum).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> - <span class="second-number">' + number2 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'" href="#">Check Answer</a><span class="checker"></span></li>');

				  	i++; // Increment i
					}
				} // End if operator -

				if (theOperator == '/') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);

						// Get all numbers that can be divided by number1 without a remainder
						var iNumber=1;
						// Create the array to store the whole numbers that divide evenly
						var divisibles = [];
						// Set a counter for the array
						var iDivisible = 1;
						// divide all the possible numbers
						while (iNumber <= number1) {
							var findDivisibles = number1/iNumber;

							if ( findDivisibles % 1 != 0 ) {
								// If it doesn't equal zero, then there's a remainder, so don't do anything
							} else {
								// There's no remainder!  Let's store that number in the divisibles array
								divisibles[iDivisible]=iNumber;
								// Increase the counter so we don't overwrite our last entry
								iDivisible++;
							}
							iNumber++;
						}
						// Let's randomly select one of the values from the array
						// iDivisible - 1 should be all the possibles keys of the divisibles array
						var divisibleSelector = 1 + Math.floor(Math.random() * (iDivisible - 1));
						// Set number2 as one of the entries from te divisbles array
						var number2 = divisibles[divisibleSelector];

						var answer = operators[theOperator](number1, number2);
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

				    $('ul.max_' + randomClassNum).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> ' + theOperator +' <span class="second-number">' + number2 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'" href="#">Check Answer</a><span class="checker"></span></li>');

				  	i++; // Increment i
					}
				} // End if operator /

			} // End create function

		$('ul.max_' + randomClassNum + ' a.btn').click( function (e) {
			e.preventDefault();
			var suffix = $(this).attr('id').split('_').pop();
			var answer = $(this).attr('class').split('_').pop();
			var submitted_answer = $(this).siblings('input.answer-box_' + suffix).val();
			if ( submitted_answer == '') {
					//If the answer is empty, send them back to the input
					$(this).siblings('input').focus();
			} else {
				if( submitted_answer == answer ) {
					//Show a Green Check if it's right
					$(this).siblings('.checker').append('<i class="icon icon-ok"><i>')
				} else {
					//Show a Red X with the submitted answer above it so we know what they entered
					$(this).siblings('.checker').append('<span class="wrong"><i class="icon icon-remove"></i><span class="guess">' + submitted_answer + '<span></span>');
					// Clear the Answer Submit Input and put focus on that input
					$(this).siblings('input.answer-box_' + suffix).val('');
					$(this).siblings('input').focus();
				}
			}
		});

		//Clear form inputs so you can't resubmit twice on accident
		$('input.maxNumber, input.howMany').val('');

	}

	//Create the forms!
	$('a.btn.maxNumber-submit').click(createEquations);

});

