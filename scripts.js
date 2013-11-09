jQuery(document).ready(function ($) {

//Hide basic algebra question


	function createEquations (maxNumber, howMany) {
		var maxNumber = $('input.maxNumber').val();
		var howMany = $('input.howMany').val();
		var theOperator = $('input[name="operator"]:checked').val();
		var basicAlgebra = $('input[name="algebra"]:checked').val();

		if (basicAlgebra == 'yes') {
			$('#content').append('<h3>' + howMany + ' Questions with a High Number of ' +maxNumber+'</h3><ul class="max_' + maxNumber + ' basic-algebra"></ul>');
				if (theOperator == '+') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						var number2 = 1 + Math.floor(Math.random() * maxNumber);
						var answer = number1+number2;
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

				    $('ul.max_' + maxNumber).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> + ' + answer_box + ' = <span class="algebra-answer">' + answer + '</span><a id="check-answer_' + i + '" class="btn answer_'+ number2 +'" href="#">Check Answer</a><span class="checker"></span></li>');
				  	i++; // Increment i
					}
				} else {
					alert('Algebra with subtraction is not ready yet');
				}

			} else {

				$('#content').append('<h3>' + howMany + ' Questions with a High Number of ' +maxNumber+'</h3><ul class="max_' + maxNumber + '"></ul>');
				if (theOperator == '+') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						var number2 = 1 + Math.floor(Math.random() * maxNumber);
						var answer = number1+number2;
						var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

				    $('ul.max_' + maxNumber).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> + <span class="second-number">' + number2 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'" href="#">Check Answer</a><span class="checker"></span></li>');
				  	i++; // Increment i
					}
				}
				if (theOperator == '-') {
					var i = 0;
					while ( i < howMany ) {
						var number1 = 1 + Math.floor(Math.random() * maxNumber);
						var number2 = 1 + Math.floor(Math.random() * maxNumber);
						if (number1 >= number2) {
							var answer = number1-number2;
							var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

					    $('ul.max_' + maxNumber).append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> - <span class="second-number">' + number2 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'" href="#">Check Answer</a><span class="checker"></span></li>');
				  	} else {
							var answer = number2-number1;
							var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

					    $('ul.max_' + maxNumber).append('<li id="question_' + i + '"><span class="first-number">' + number2 + '</span> - <span class="second-number">' + number1 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'" href="#">Check Answer</a><span class="checker"></span></li>');

				  	}
				  	i++; // Increment i
					}
				}
			} // End create function

		$('ul.max_' + maxNumber + ' a.btn').click( function (e) {
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
