// var topics = ["dogs","pandas","elephants" ];
// console.log( topics);
// for(var i = 0; i < topics.length; i++){
//   var prebuttons = "<button >" + topics[i] + "</button>";

//   var userInput = $("#gif-input").val().trim();
//   userInput.push(topics);   
//   $("#gif-view").append(prebuttons);
  
  
    
// };
var topics = ["dogs","pandas","elephants","mice" ];
var userInput = $("#gif-input").val().trim();
function renderButtons(){
  
  for(var i = 0; i < topics.length; i++){
    var prebuttons = "<button id = 'button'>" + topics[i] + "</button>";
    $("#gif-view").append(prebuttons);
    
  }
  $("#find-gif").on("click", function(event) {
      event.preventDefault();
      var userInput = $("#gif-input").val().trim();
      
      console.log(userInput);
      topics.append(userInput); 
    
      console.log( topics);
    
     renderButtons();
    });
}renderButtons();





for( var i = 0; i < topics.length; i++){
  $("#button").on("click" , function (){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=1n42QHILWND8j2gCdeZzeuDYfgbUCAJQ&tag=" + prebuttons;
    //var gifName = $(this).attr("data-name");
      
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
        
    
          var imageUrl = response.data.fixed_width_small_still_url;
          var animatedUrl = response.data.image_original_url;
          
          var gifImage = $("<img>");
          
          gifImage.attr("src", imageUrl);
          gifImage.attr("alt", "gif image");
          $("#images").append(gifImage);
          $("#images").on("click", function(){
            gifImage.attr("src", animatedUrl);
            gifImage.attr("alt", "gif image");
          });
          
      });
  
  
  })
}


