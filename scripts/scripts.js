jQuery(document).ready(function ($) {

  // Hide stuff
  $('p.nice-job').hide();

  //Slide Form
  function equationsSlide () {
      $('#create-equations-slide').removeClass('pulsate');
      $('p.nice-job').hide();
      $('#create-equations').removeClass('relative');
      $('#create-equations .row').slideToggle();
      $('#create-equations-slide i').toggleClass('rotate-half');
  }

  $('#create-equations-slide').click(equationsSlide);
  $('p.nice-job').click(equationsSlide);

  function createEquations (maxNumber, howMany) {

    var maxNumber = $('input.maxNumber').val();
    var howMany = $('input.howMany').val();
    var theOperator = $('input[name="operator"]:checked').val();
    var basicAlgebra = $('input[name="algebra"]:checked').val();

    var operators = {
      '+': function(a, b) { return a + b },
      '-': function(a, b) { return a - b },
      '*': function(a, b) { return a * b },
      '/': function(a, b) { return a / b },
    };

    function divisibleNum(number1) {
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
      return divisibles[divisibleSelector];
    }

    function getSecondNum(number1) {
      if (theOperator == '-') {
        // Only get a number that's <= than number1
        var number2 = 1 + Math.floor(Math.random() * number1);
      } else if (theOperator == '/'){
        var number2 = divisibleNum(number1);
      } else { // Must be multiplication or addition
        var number2 = 1 + Math.floor(Math.random() * maxNumber);
      }
      return number2;
    }

    // Create the UL list to append the questions to
    $('#content').append('<h3>' + howMany + ' Questions with a High Number of ' + maxNumber + '</h3><ul class="question-list"></ul>');

    // Check if it's Basic Algebra or a normal equation
    if (basicAlgebra == 'yes') {

      var i = 0;
      while ( i < howMany ) {
      	var number1 = 1 + Math.floor(Math.random() * maxNumber);
        var number2 = getSecondNum(number1);
        var answer = operators[theOperator](number1, number2);
        var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer algebra-hopeful-answer" />'

        $('#content ul').last().append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> ' + theOperator + ' ' + answer_box + ' = <span class="algebra-answer">' + answer + '</span><a id="check-answer_' + i + '" class="btn answer_'+ number2 +'">Check Answer</a><span class="checker"></span></li>');
        i++; // Increment i
      }

      //Slide to created equations
      var sectionTop = ($('#content ul').last().offset().top)-40;
      $('html, body').animate({
          scrollTop: sectionTop
        }, 1200);

    // It's not basic Algebra, so just make a normal equation
    } else {

        var i = 0;
        while ( i < howMany ) {
          var number1 = 1 + Math.floor(Math.random() * maxNumber);
        	var number2 = getSecondNum(number1);

          var answer = operators[theOperator](number1, number2);
          var answer_box= '<input type="text" pattern="\\d*" class="answer-box_' + i + ' hopeful-answer" />'

          $('#content ul').last().append('<li id="question_' + i + '"><span class="first-number">' + number1 + '</span> ' + theOperator + ' <span class="second-number">' + number2 + '</span> = ' + answer_box + '<a id="check-answer_' + i + '" class="btn answer_'+ answer +'">Check Answer</a><span class="checker"></span></li>');
          i++; // Increment i

        }

        //Slide to created equations
        var sectionTop = ($('#content ul').last().offset().top)-40;
        $('html, body').animate({
          scrollTop: sectionTop
        }, 1200);

      } // End create function

  }


  // Use .on instead of .click because elements were dymanically created so the click event wasn't bound to them yet
  $(document).on('click', '#content a.btn', function() {
    var suffix = $(this).attr('id').split('_').pop();
    var theAnswer = $(this).attr('class').split('_').pop();
    var submitted_answer = $(this).siblings('input.answer-box_' + suffix).val();
    if ( submitted_answer == '') {
        //If the answer is empty, send them back to the input
        $(this).siblings('input.answer-box_' + suffix).focus();
    } else {
      if( submitted_answer == theAnswer ) {
        //Show a Green Check if it's right
        $(this).hide();
        $(this).nextAll('.checker:first').prepend('<i class="icon-ok"><i>');
        $(this).nextAll('.checker:first').children('.icon-ok:first').hide().fadeIn().delay('2000').addClass("rotate-whole");

          // See if there are any more questions right
          if ( $('#content a.btn').is(":visible")) {

          } else {
            $('#create-equations').removeClass('relative');
            $('p.nice-job').slideToggle();
            $('#create-equations-slide').addClass('pulsate');
          }

      } else {
        //Show a Red X with the submitted answer above it so we know what they entered
        $(this).nextAll('.checker:first').append('<span class="wrong"><i class="icon-remove"></i><span class="guess">' + submitted_answer + '<span></span>');
        // Clear the Answer Submit Input and put focus on that input
        $(this).siblings('input.answer-box_' + suffix + ':first').val('');
        $(this).siblings('input.answer-box_' + suffix + ':first').focus();
      }
    }
  });

  //Create the forms!
  $(document).on('click', '.maxNumber-submit', function() {
    var maxNumber = $('input.maxNumber').val();
    var howMany = $('input.howMany').val();
    var operatorCheck = $('input[name="operator"]:checked').length == 0;
    if ((maxNumber == '') || (howMany== '') || (operatorCheck)) {
      alert("You didn't fill out the whole form");
    } else {
      createEquations();
      equationsSlide();
      //Change create equations form to relative, because we don't really need to watch it scroll down the page.
      // Also, there's a bug on iOS that makes it jump around the page
      $('#create-equations').addClass('relative');

      //Clear form inputs so you can't resubmit twice on accident
      $('input.maxNumber, input.howMany').val('');
      $('input[name="operator"]').prop('checked', false);
      $('input[name="algebra"]').prop('checked', false);


    }
  });

  // Fix iOS fixed position with keyboard jumps around page
  // Do a programmatic scroll to reset it to the right spot
  $(document).on('blur', 'input, textarea', function() {
    setTimeout(function() {
        window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
    }, 0);
  });

});

