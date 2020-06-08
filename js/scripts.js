$(document).ready(function() { //this calls on the jquery page
  $("form#favorite").submit(function(event) {
    event.preventDefault();
  
    let color = $("input#color").val();
    let band = $("input#band").val();
    let animal = $("input#animal").val();
    let planet = $("input#planet").val();

    let favThings = [color, band, animal, planet];
    // let newFavThings; <--- that would be declaring just an empty variable; line 12 would be declaring an empty array
    let newFavThings = [];
    newFavThings.push(favThings[1], favThings[0]); //we're pushing the indexies [1] of favThings into our empty newFavThings array

    console.log(newFavThings)

    $("ul#listOutput").prependTo("<li>" + newFavThings + "</li>"); //outputting to an id

  });
});