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

    answer_sum = answer_1 + answer_2 + answer_3 + answer_4 + answer_5;
    age += 5;

    $(".name").text(name);
    $(".age").text(age);

    event.preventDefault();

    if (answer_1 === 0 || answer_2 === 0 || answer_3 === 0 || answer_4 === 0 || answer_5 === 0) {
      alert("Please answer all the questions");
    } else if (answer_sum <= 5) { 
      $("#swift").show();
    } else if (answer_sum > 5 && answer_sum <= 9) {
      $("#c_plus_plus").show();
    } else if (answer_sum > 9 && answer_sum <= 13) {
      $("#python").show();
    } else {
      $("#ruby").show();
    }


    // $("#swift").show();
    // $("#c_plus_plus").show();
    // $("#python").show();
    // $("#ruby").show();

  });
});