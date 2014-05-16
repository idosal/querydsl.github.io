$(document).ready(function() {
  var versions = [
    "3.3.3","3.3.2","3.3.1","3.3.0", 
    "3.2.4","3.2.3","3.2.2","3.2.1","3.2.0",
    "3.1.1","3.1.0","3.0.0",
    "2.9.0","2.8.0","2.7.0","2.6.0","2.5.0","2.4.0","2.3.0","2.2.0","2.1.0","2.0.0"];

  _.each(versions, function(arg) {
    var opt = ["<option value='", arg, "'>", arg, "</option>"].join("");
    $("#docs .version").append(opt);
  });

  $("#docs .version").change(function() {
    var version = $(this).val();
    var prefix = "http://www.querydsl.com/static/querydsl/" + version;
    $("#docs .docs").attr("href", prefix + "/reference/html/");
    // var pdf = prefix + "/reference/pdf/"; 
    $("#docs .javadocs").attr("href", prefix + "/apidocs/");
    $("#docs .downloads").attr("href", prefix)
  });

  var prefix = "http://www.querydsl.com/static/querydsl/" + versions[0];
  $("#docs .docs").attr("href", prefix + "/reference/html/");
  // var pdf = prefix + "/reference/pdf/"; 
  $("#docs .javadocs").attr("href", prefix + "/apidocs/");
  $("#docs .downloads").attr("href", prefix)

});