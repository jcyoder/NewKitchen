/*  Menu JavaScript */

$(document).ready( function() {
    
    var menutab = 'breakfast';
    
    $('ul.navb a#' + menutab ).addClass('chosen');
    
    
    $('ul.navb a').on('click', function(e) {
			menutab = $(this).attr('id');
			$('ul.navb a').removeClass('chosen');
			$(this).addClass('chosen');
    })
 
});