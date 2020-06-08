$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
  
    let color = $("input#color").val();
    let band = $("input#band").val();
  
    let favThings = [band, color]

    console.log(favThings)

    $("#output").text(favThings);

  });
});

