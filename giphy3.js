var topics = ["dogs","pandas","elephants","mice" ];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
    function displayGif() {

        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "1n42QHILWND8j2gCdeZzeuDYfgbUCAJQ";
        console.log(queryURL);
        console.log(topics);
        console.log(topic);

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          // Creates a div to hold the movie
          console.log(response);
          var imageUrl = response.data.fixed_width_small_still_url;
          var animatedUrl = response.data.image_original_url;
            
          var gifImage = $("<img>");
          
          gifImage.attr("src", imageUrl);
          gifImage.attr("alt", "gif image");
          $("#images").prepend(gifImage);
          $("#images").on("click", function(){
             gifImage.attr("src", animatedUrl);
             gifImage.attr("alt", "gif image");
          });
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Loops through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("topic");
          // Added a data-attribute
          a.attr("data-name", topics[i]);
          // Provided the initial button text
          a.text( topics[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where the add movie button is clicked
      $("#submit").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var topic = $("#gif-input").val().trim();

        // The movie from the textbox is then added to our array
        topics.push(topic);
        $("#gif-input").val("");

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".topic", displayGif);
      displayGif();
      renderButtons();

      // Calling the renderButtons function to display the intial buttons
      
   
 
