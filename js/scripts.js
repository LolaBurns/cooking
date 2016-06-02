var toCup = function(tbs) {
  return tbs * 16;
};

var toTbs = function(cup) {
  return cup / 0.0625;
};

var toKg = function(lbs) {
  return lbs * 0.45359237;
};

var toLbs = function(kg) {
  return kg * 2.2046;
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
  $("form#weight").submit(function(event) {
    event.preventDefault();
    var lbs = parseInt($("#lbsKg").val());
    var conversion3 = toKg(lbs);
    $("#convert2").text(conversion3);
  });
  $("form#weight").submit(function(event) {
    event.preventDefault();
    var kg = parseInt($("#kgLbs").val());
    var conversion4 = toLbs(kg);
    $("#convert2").text(conversion4);
  });  
});
