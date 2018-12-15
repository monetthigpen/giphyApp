$("#find-gif").on("click", function(event) {
    event.preventDefault();
  
   
    console.log(userInput);
    //define the url to get the gifs from
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=1n42QHILWND8j2gCdeZzeuDYfgbUCAJQ&tag=" + userInput ;
  
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
      
  
        var imageUrl = response.data.fixed_width_small_still_url;
        var animatedUrl = response.data.image_original_url;
        
        
        console.log(imageUrl);
        
        var gifImage = $("<img>");
        
        gifImage.attr("src", imageUrl);
        gifImage.attr("alt", "gif image");
  
        $("#images").prepend(gifImage);
        $("#images").on("click", function(){
          gifImage.attr("src", animatedUrl);
          gifImage.attr("alt", "gif image");
        });
        
  
        
      });
      $("#gif-view").on("click", function(){
        var buttonUrl = $(prebuttons).val().trim();
        console.log(buttonUrl);
        buttonUrl.attr("src", imageUrl);
        buttonUrl.attr("alt", "gif image");
  
        $("#images").prepend(buttonUrl);
        $("#images").on("click", function(){
          buttonUrl.attr("src", animatedUrl);
          buttonUrl.attr("alt", "gif image");
        });
      })
  });