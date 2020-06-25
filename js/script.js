//business logic
function Place(location,landmark, time, notes) {
    this.location = location;
    this.landmark = landmark;
    this.time = time;
    this.notes = notes;
}
//user interface logic
$(document).ready(function(){
    $("#place").submit(function(event){
        var inputLocation = $("input#location").val();
        var inputLandmark = $("input#landmark").val();
        var inputTime = $("input#time").val();
        var inputNotes = $("input#notes").val();

        var newPlace = new Place(inputLocation, inputLandmark, inputTime, inputNotes);

        $("ul#visits").append("<li><span class='place'>" + newPlace.location + "</span></li>");

        $("input#location").val("");
        $("input#landmark").val("");
        $("input#time").val("");
        $("input#notes").val("");

        $(".place").last().click(function(){
            $("#show-places").show();
            $("#show-places h2").text(newPlace.location);
            $(".location").text(newPlace.location);
            $(".landmark").text(newPlace.landmark);
            $(".time").text(newPlace.time);
            $(".notes").text(newPlace.notes);

        });

        event.preventDefault();

    });
   
});

