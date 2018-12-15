var topics = ["dogs","pandas","elephants" ];


for(var i = 0; i < topics.length; i++){
   var prebuttons = "<button >" + topics[i] + "</button>";
      
  $("#gif-view").append(prebuttons);
  
    
}



$("#find-gif").on("click", function(event) {
  event.preventDefault();

  var userInput = $("#gif-input").val().trim();
  console.log(userInput);
  //define the url to get the gifs from
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=1n42QHILWND8j2gCdeZzeuDYfgbUCAJQ&tag=" + userInput ;

  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
    

      var imageUrl = response.data.image_original_url;
      console.log(imageUrl);
      
      var gifImage = $("<img>");
      
      gifImage.attr("src", imageUrl);
      gifImage.attr("alt", "gif image");

      $("#images").prepend(gifImage);
    });
});