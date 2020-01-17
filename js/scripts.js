$(document).ready(function()  {
  $("form#language_sorter").submit(function(event)  {
    var answer_1 = $("select#application_type").val();
    var answer_2 = $("select#operating_system").val();
    var answer_3 = $("select#favorite_saga").val();

    // if (answer_1 === "1") {
    //   alert("You should learn Swift!");
    // } else if ( answer_1 === "2") {
    //   alert("You should learn C++!");
    // } else if (answer_1 === "3") {
    //   alert("You should learn Python!");
    // } else {
    //   alert("Please answer question 1");
    // }

    // if (answer_2 === "1") {
    //   alert("You should learn Swift or Python!")
    // } else if (answer_2 === "2") {
    //   alert("You should learn C++ or Python!")
    // } else {
    //   alert("Please answer question 2:")
    // }

    if (answer_3 === "1") {
      alert("You should learn Swift!");
    } else if ( answer_3 === "2") {
      alert("You should learn C++!");
    } else if (answer_3 === "3") {
      alert("You should learn Python!");
    } else {
      alert("Please answer question 3");
    }
  });
});