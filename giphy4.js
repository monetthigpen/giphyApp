var topics = ["dogs","pandas","elephants","mice" ];
function displayMovieInfo() {

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=1n42QHILWND8j2gCdeZzeuDYfgbUCAJQ&tag=" + topic ;;

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creates a div to hold the movie
      console.log(response);
      var newDiv = $("<div class ='gif-info'>");
        var rating = response.Rated;
        
        console.log(response.Rated);
        var pOne = $("<p>").text("Rating Data: " + response.Rated);
          newDiv.append(pOne);
      // Retrieves the Rating Data
      // Creates an element to have the rating displayed
      // Displays the rating
      // Retrieves the release year
      // Creates an element to hold the release year
      // Displays the release year
      // Retrieves the plot
      // Creates an element to hold the plot
      // Appends the plot
      // Creates an element to hold the image
      // Appends the image
      var image = $("<img>")
      // Puts the entire Movie above the previous movies.
      
    });

  }

  // Function for displaying movie data
  function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Loops through the array of movies
    for (var i = 0; i < movies.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("movie");
      // Added a data-attribute
      a.attr("data-name", movies[i]);
      // Provided the initial button text
      a.text(movies[i]);
      // Added the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }renderButtons();

    
    $("#add-gif").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input fields
        
        var gifInput = $("#gif-input").val().trim();
        console.log(gifInput);
        // Write code to add the new movie into the movies array
        $(gifInput).push(topics);
        console.log(topics);

        // The renderButtons function is called, rendering the list of movie buttons
        renderButtons();
        
      });