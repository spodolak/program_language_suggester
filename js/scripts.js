$(document).ready(function()  {
  $("form#language_sorter").submit(function(event)  {
    
    $("#swift, #c_plus_plus, #python, #ruby").hide();

    var answer_1 = parseInt($("select#application_type").val());
    var answer_2 = parseInt($("select#operating_system").val());
    var answer_3 = parseInt($("select#favorite_saga").val());
    var answer_4 = parseInt($("select#hours_sleep").val());
    var answer_5 = parseInt($("select#crayon").val());
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());

    age += 5;

    $(".name").text(name);
    $(".age").text(age);

    event.preventDefault();

    if (answer_1 === 0 || answer_2 === 0 || answer_3 === 0 || answer_4 === 0 || answer_5 === 0) {
      alert("Please answer all the questions");
    } else {

    }


    // $("#swift").show();
    // $("#c_plus_plus").show();
    // $("#python").show();
    // $("#ruby").show();




    if (answer_1 === 1 ) {
      $("#swift").show();
    } else if ( answer_1 === 1 ) {
      $("#c_plus_plus").show();
    } else if (answer_1 === 1 ) {
      $("#python").show();
      $("#ruby").show();
    } else {

    }

    // if (answer_2 === "1") {
    //   alert("You should learn Swift or Python!")
    // } else if (answer_2 === "2") {
    //   alert("You should learn C++ or Python!")
    // } else {
    //   alert("Please answer question 2:")
    // }

    // if (answer_3 === "1") {
    //   alert("You should learn Swift!");
    // } else if ( answer_3 === "2") {
    //   alert("You should learn C++!");
    // } else if (answer_3 === "3") {
    //   alert("You should learn Python!");
    // } else {
    //   alert("Please answer question 3");
    // }

    // if (answer_4 === "1") {
    //   alert("You should learn Swift!");
    // } else if (answer_4 === "2") {
    //   alert("You should learn C++!");
    // } else if (answer_4 === "3") {
    //   alert("You should learn Python!");
    // } else if (answer_4 === "4") {
    //   alert("You should learn C++");
    // } else {
    //   alert("Please answer question 4");
    // }

    // if (answer_5 === "1") {
    //   alert("You should learn Swift!");
    // } else if (answer_5 === "2") {
    //   alert("You should learn C++!");
    // } else if (answer_5 === "3") {
    //   alert("You should learn Python!");
    // } else if (answer_5 === "4") {
    //   alert("You should learn C++");
    // } else {
    //   alert("Please answer question 5");
    // }
    
  });
});