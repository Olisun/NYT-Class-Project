$("button").on("click", function() {
  var test = $(this).attr("data-test");
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=EFRfSEIavx64we1QZLWbfrO61O49Ajqt"
  var key;
  var searchTerm;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {


    console.log(response);



    // var results = response.data;

    // for (var i = 0; i < results.length; i++) {



  });
});