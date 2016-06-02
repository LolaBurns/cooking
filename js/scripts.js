var toCup = function(tbs) {
  return tbs * 16;
};

var toTbs = function(cup) {
  return cup / 0.0625;
};

// user interface

$(document).ready(function() {
  $("form#volume").submit(function(event) {
    event.preventDefault();
    var tbs = parseInt($("#tbsCup").val());
    var conversion1 = toCup(tbs);
    $("#convert1").text(conversion1);
  });

    $("form#volume").submit(function(event) {
      event.preventDefault();
      var cup = parseInt($("#cuptbs").val());
      var conversion2 = toTbs(cup);
      $("#convert1").text(conversion2);
    });
});
