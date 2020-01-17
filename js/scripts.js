$(document).ready(function()  {
  $("form#language_sorter").submit(function(event)  {
    var answer = $("select#application_type").val();
    alert(answer);
    if (answer === "1") {
      alert("That's a good answer!");
    } else {
      alert("That's not a good answer");
    }
  });
});