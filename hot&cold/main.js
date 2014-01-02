/*jslint es5: true, all-your-other-jslint-options */

$(document).ready(function () {
    $(function () {
        guess();
    });
})

    //Generate random number and set other variables
    var answer = Math.floor((Math.random()*101)+1);
    console.log(answer);
    var prevDistance = null;
    var attempts = 1;

    function guess() {
        $('#submit').click(submit);
        $('.guess').keydown(function (e) {
            if (e.keyCode == 13) {
                submit();
            }
        });

    }

    //Submit guess
    function submit() {
        var guess = $('.guess').val();
        console.log(guess);
        var valid = validate(guess);

        //if valid check answer
        if (valid === true) {
            check(guess);
        }
    }

    function validate(guess) {
        //Check for nulls or invalid values
        if (guess === '') {
            $('#Display').html('Please enter a number');
            return false;
        } else if (guess > 100 || guess < 1) {
            $('#Display').html("Gotta be between 1 and 100, please").css({ color: 'red' });
            $('.guess').val('');

            return false;
        }
         else {
        return true;
         }
    }

    function check(guess) {
        //Get distance of first guess from answer
        var distance = Math.abs(guess - answer);

        //Display congrats if correct answer
        if (guess == answer) {
            console.log("Congratulations");
            $('#Display').html('Congratulations!')
                .css({ color: 'Green' });
            
        }
        else if (prevDistance == null) {
            firstGuess(guess, answer);

        } else {
            hotCold(prevDistance, distance, guess, answer);
        }

        //set distance from answer
        prevDistance = distance;

    }

    //First Guess
    function firstGuess(guess, answer) {
        if (guess < answer) {
            console.log('Too low');
            $('#Display').html('Too low! Try again');
        }
        else if (guess > answer) {
            console.log('Too high');
            $('#Display').html('Too high! Try again');
        }

        attempts = attempts + 1;

    }

    

    //Check for 'hotter' 'colder'
    function hotCold(prevDistance, distance, guess, answer) {

        //hotter (within 10 numbers)
        if (prevDistance >= distance && distance <= 10) {

           if (guess < answer) {
                $('#Display').html('Hot! Guess higher!')
                    .css({ color: 'FireBrick ' });
            }
            else if (guess > answer) {
                $('#Display').html('Hot! Guess lower!')
                    .css({ color: 'FireBrick' });
            }
        }
    }

            //warmer
        if (prevDistance >= distance && distance <= 20) {

            if (guess < answer) {
                $('#Display').html('Getting warmer! Go higher')
                    .css({ color: 'FireBrick ' });
            }
            else if (guess > answer) {
                $('#Display').html('Getting warmer! Go lower')
                    .css({ color: 'FireBrick ' });
            }
        }
            //warm
        else if (prevDistance > distance) {
            
            if (guess < answer) {
                $('#Display').html('Guess higher!')
                    .css({ color: 'Blue ' });
            }
            else if (guess > answer) {
                $('#Display').html('Guess lower!')
                    .css({ color: 'Blue ' });
            }
        }
        

        attempts = attempts + 1;
    


    //startOver button. 
    $('#startOver').click(function (e) {
        event.preventDefault();
        answer = Math.floor((Math.random()*101)+1);
        console.log(answer);
        
        $('#Display').html('');
        prevDistance = null;
        attempts = 1;

        $('.guessing').val('');
    });




