var topics = ["dogs","pandas","elephants","mice" ];

      // displayMovieInfo function re-renders the HTML to display the appropriate content. Search term is used to query the API we will get this from the button's data-name attribute 
    function displayGif(searchTerm) {

      // This is refering to the function and not the button

        var topic = $(this).attr("data-name");

        var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=1n42QHILWND8j2gCdeZzeuDYfgbUCAJQ&limit=10";
        // console.log(queryURL);
        // console.log(topics);
        // console.log(topic);

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#images").empty();

          // Creates a div to hold the movie
          console.log(response);
          for( a = 0; a < 10; a++){
            var imageUrl = response.data[a].images.fixed_height_still.url;
          //  console.log(imageUrl);

           // This method won't work because you will keep reasigning the value each time it enters the for loop, you should save the animated Url in the data attribute of the images 
           var animatedUrl = response.data[a].images.fixed_height.url;
          //  console.log(animatedUrl);
            
             // This doesnt work, the $() was unnecessary 
            // var rated = $(response.data[a].rating);

             //This is how to access the rating.
           var  rated = response.data[a].rating


           
            /* this could be written as: 
             var gifImage = $("<img>");
             gifImage.attr("src", imageUrl);
            gifImage.attr("alt", "gif image");
             gifImage.attr("src", animatedUrl);
             gifImage.attr("alt", "gif image");




             */
            // In the line below im creating a image with the data attribute animate, I'm storing the variable animatedUrl as the value, the src of the image contains the still version of the gif. I also gave the images a class so you can reference it when you add your click event
            
            var gifImage = `<img class="gif imgg" data-animate="${animatedUrl}" src=${imageUrl} alt="gif image">`
            var tag = $("<P>").text("rating:" + rated);
            $("#images").prepend(tag);
            // console.log(rated);

           
            $("#images").prepend(gifImage);
            // You need to add a click event on the images not the #images div
            // $("#images").on("click", function(){
            
            // });
              // Here we add an event listener on the document until  elements with the class .gif appear on the page.
            $(document).on('click','.gif',function(){
              // Pull off the data attribute animate from each image that the user clicks.
              var animate = $(this).attr('data-animate')
              // Change the image from being still to animate
              $(this).attr('src',animate)
            })
         

          }
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
          var c = $("<button >");
          // Adds a class of movie to our button
          c.addClass("topics btn btn-info but");
          // Added a data-attribute
          c.attr("data-name", topics[i]);
          // Provided the initial button text
          c.text( topics[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(c);
          console.log(topics[i]);
          
        }
      }


      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var topic = $("#gif-input").val().trim();

        // The movie from the textbox is then added to our array
        topics.push(topic);
        

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

     // Adds click events for the buttons we dynamically created. 
      $(document).on("click", ".topics", function(){
        event.preventDefault();
        // pull the value of the input
        var topic = $("#gif-input").val().trim();
        // pulls the data attribute name off the clicked img, we will use this to search the giphy API
        var searchTerm = $(this).attr('data-name')
        displayGif(searchTerm)
      });
      //  displayGif();
      renderButtons();

        // Calling the renderButtons function to display the intial buttons
      
   
 
