$(document).ready(function() {
  $("#fav form").submit(function(event) {
    var colorInput = $("input#color").val();
    var foodInput = $("input#food").val();
    var restInput = $("input#rest").val();


    $(".color").append(colorInput);
    $(".food").append(foodInput);
    $(".rest").append(restInput);

    var array = [colorInput, foodInput, restInput]

    var array2 = [foodInput, restInput]

    var array3 = array2.push(colorInput)

    var array4 = array3.toString()

    $(".array1").text(array[0]);
    $(".array2").text(array[1]);
    $(".array3").text(array[2]);
    /*$(".array4").text(array[0]);*/
    $("#Summary").show();


     event.preventDefault();

   });
});
