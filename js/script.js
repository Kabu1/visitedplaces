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

        var newPlace = (inputLocation, inputLandmark, inputTime, inputNotes);

        $("ul#visits").append("<li><span class='visits'>" + newPlace.location + "</span></li>"   )

        $("input#location").val("");
        $("input#landmark").val("");
        $("input#time").val("");
        $("input#notes").val("");






    });
    event.preventDefault();
});