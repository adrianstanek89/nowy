<!-- animacje -->
$(document).ready(function() {
    
    
$('#inputCity').keydown(function() {
    $(this).addClass("rubberBand animated");
    $('#submitCity').removeClass('disabled')
});     

$('#submitCity').click(function() {
    $(this).addClass("rubberBand animated");
});





});
