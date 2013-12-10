$(document).ready(function() {

//Save user's item as a new variable
        var addItem = " ";
                $('#list').html(addItem);

                $('#submit').click(function(e){
                        e.preventDefault();
                          addItem = $('#items').val();
                          validateList();
                });

//Check that the entry is valid
         function validateList() {
                if(addItem === "") {
                        $('p').html("Oops!<br>Please try again.");
                  } else {
                          console.log("Item validated");
                          $('p').replaceWith('<p></p>');
                          updateList();
                  }
        }

//Add new item to the list
        var updateList = function(){
           $('#list').append('<li> <input type="checkbox">' + addItem + '</li>'); 
        }

//Add "checked" class to the added items
       $('#list').on('click', 'input[type=checkbox]', function(){
                  $(this).closest('li').toggleClass('checked');
        });
		
//Remove

	$('#remove').click(function(e){                
                e.preventDefault();
                $('.checked').css('textDecoration','line-through');
        });
		
});

