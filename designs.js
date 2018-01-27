let rows; 
let cols; 

$( document ).ready(function() {

 	// call to function that makes grid
	$( '#my-button' ).click( function(e) {


		console.log($('#colorPicker').val()); 

		rows = $("#input_height").val();
		cols = $("#input_width").val(); 

		e.preventDefault(); 
		$( '#my-button' ).on( 'click', function( evt ) {
    	  console.log( evt );
		});

		$("table").delegate(".cell", "mouseenter", function() {
			$( 'td' ).on( 'click', function( evt ) {
			   console.log( evt ); 
			   $(evt.target).css('background', $('#colorPicker').val()); 
			});
		});

     	makeGrid(rows, cols); 
	});

});

function makeGrid(rows, cols) {

	for(let row_number = 0; row_number < rows; row_number++) {
		$("table").append("<tr></tr>"); 
	}	

	for(let col_number = 0; col_number < cols; col_number++) {
		$("tr").append("<td class='cell'></td>"); 	
	}
}