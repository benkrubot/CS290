$(document).ready(function(){ //When the document is ready we will execute a function

    $('form').on('submit', function(){ //When there is a submit event, execute function; this will add 
  
        var item = $('form input'); //Create variable that is set to input field
        var todo = {item: item.val()}; //Create variable that is set to object; item property is set = to item value and stored into item property
  
        $.ajax({ 
          type: 'POST', //Type of request
          url: '/index', //Post request to this route
          data: todo, //Passing along todo data
          success: function(data){ //On success execute function
            location.reload(); //Reloading page
          }
        });
        return false;
    });
  
    $('.list').on('click', function(){ //On click, execute function; this will delete
        var item = $(this).text().replace(/ /g, "-"); //Replacing any space with hyphens and storing into item
        $.ajax({
          type: 'DELETE',
          url: '/index/' + item,
          success: function(data){
            location.reload(); 
          }
        });
    });
  
  });